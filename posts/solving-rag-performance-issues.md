---
title: "RAG 시스템 성능 문제 해결기: 검색 속도 80% 개선"
date: "2024-12-28"
excerpt: "대용량 PDF 문서 검색에서 발생한 성능 저하 문제를 벡터 DB 최적화와 청킹 전략 개선으로 해결한 실전 사례입니다."
tags: ["RAG", "Performance", "LangChain", "Problem Solving"]
author: "Sungwoo"
---

# RAG 시스템 성능 문제 해결기

## 문제 상황

pdf-rag-streamlit 프로젝트를 진행하면서 심각한 성능 문제에 직면했습니다.

### 발생한 문제들

1. **느린 검색 속도**: 100페이지 이상의 PDF에서 쿼리 응답 시간이 10초 이상
2. **부정확한 답변**: 관련 없는 문서 청크가 검색되어 LLM이 잘못된 답변 생성
3. **메모리 오버플로우**: 대용량 문서 처리 시 메모리 부족 에러 발생

## 원인 분석

### 1. 비효율적인 문서 청킹

```python
# 문제가 있던 코드
text_splitter = CharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=0  # ❌ 오버랩 없음
)
```

**문제점**:
- 오버랩이 없어 문맥이 단절됨
- 고정 크기로 인해 문장이 중간에 잘림

### 2. 잘못된 임베딩 전략

```python
# 비효율적인 방식
for chunk in chunks:
    embedding = get_embedding(chunk)  # ❌ 하나씩 처리
    vector_store.add(embedding)
```

**문제점**:
- 순차 처리로 인한 속도 저하
- API 호출 오버헤드

## 해결 방법

### 1. 스마트 청킹 전략

```python
# 개선된 코드
from langchain.text_splitter import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,       # 더 작은 청크
    chunk_overlap=100,    # ✅ 20% 오버랩
    separators=["\n\n", "\n", ". ", " ", ""],  # 우선순위 기반 분할
)
```

**개선 효과**:
- 문맥 보존: 오버랩으로 경계 정보 유지
- 의미 단위 분할: 문장/단락 기준으로 자연스럽게 분리

### 2. 배치 임베딩 처리

```python
# 최적화된 방식
def batch_embed(chunks, batch_size=32):
    embeddings = []
    for i in range(0, len(chunks), batch_size):
        batch = chunks[i:i + batch_size]
        batch_embeddings = embedding_model.embed_documents(batch)  # ✅ 배치 처리
        embeddings.extend(batch_embeddings)
    return embeddings
```

**개선 효과**:
- 처리 속도 5배 향상
- API 호출 횟수 90% 감소

### 3. 벡터 DB 인덱스 최적화

```python
from langchain.vectorstores import Chroma

vector_store = Chroma(
    embedding_function=embeddings,
    collection_metadata={
        "hnsw:space": "cosine",
        "hnsw:M": 16,                    # ✅ 연결 수 최적화
        "hnsw:ef_construction": 200,     # ✅ 인덱스 품질 향상
        "hnsw:ef_search": 50             # ✅ 검색 속도/정확도 밸런스
    }
)
```

**개선 효과**:
- 검색 속도 3배 향상
- 정확도는 유지하면서 성능 개선

### 4. 메모리 효율적인 처리

```python
# 스트리밍 방식으로 대용량 문서 처리
def process_large_pdf(pdf_path, chunk_processor):
    with fitz.open(pdf_path) as doc:
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            text = page.get_text()

            # 페이지별로 청킹 및 처리
            chunks = text_splitter.split_text(text)
            chunk_processor(chunks)

            # 메모리 해제
            del text, chunks
            gc.collect()
```

## 성과

### 정량적 성과

| 지표 | Before | After | 개선율 |
|------|--------|-------|--------|
| 검색 속도 | 10.2초 | 2.1초 | **80% 향상** |
| 답변 정확도 | 65% | 92% | **27%p 증가** |
| 메모리 사용량 | 2.8GB | 850MB | **70% 감소** |

### 정성적 성과

- ✅ 실시간 대화형 검색 가능
- ✅ 500페이지 이상 문서도 안정적 처리
- ✅ Streamlit 앱의 사용자 경험 대폭 개선

## 배운 점

### 1. 청킹이 RAG의 핵심

RAG 시스템에서 가장 중요한 것은 **적절한 문서 청킹**입니다. 청킹 전략에 따라:
- 검색 정확도가 크게 달라짐
- LLM의 답변 품질이 결정됨

### 2. 측정 없이는 최적화 없음

성능 개선을 위해서는:
- 각 단계별 시간 측정
- 메모리 프로파일링
- A/B 테스트로 효과 검증

```python
import time
import tracemalloc

# 성능 측정 래퍼
def measure_performance(func):
    def wrapper(*args, **kwargs):
        tracemalloc.start()
        start_time = time.time()

        result = func(*args, **kwargs)

        elapsed_time = time.time() - start_time
        current, peak = tracemalloc.get_traced_memory()
        tracemalloc.stop()

        print(f"Time: {elapsed_time:.2f}s")
        print(f"Memory: {peak / 1024 / 1024:.2f}MB")

        return result
    return wrapper
```

### 3. 배치 처리의 중요성

API 기반 서비스에서는:
- 배치 처리로 네트워크 오버헤드 최소화
- Rate limit 고려한 처리 속도 조절
- 비용 최적화 효과

## 실전 팁

### 벡터 DB 선택 가이드

1. **Chroma**: 로컬 개발, 프로토타이핑
2. **Pinecone**: 프로덕션, 대규모 데이터
3. **Weaviate**: 멀티모달, 복잡한 쿼리

### 청킹 크기 결정 방법

```python
# 실험을 통한 최적 청크 크기 찾기
chunk_sizes = [200, 500, 1000, 2000]
overlaps = [0, 50, 100, 200]

best_score = 0
best_config = {}

for size in chunk_sizes:
    for overlap in overlaps:
        score = evaluate_rag(chunk_size=size, overlap=overlap)
        if score > best_score:
            best_score = score
            best_config = {'size': size, 'overlap': overlap}
```

## 결론

RAG 시스템의 성능 문제는 대부분:
1. 문서 청킹 전략
2. 임베딩 처리 방식
3. 벡터 DB 설정

이 세 가지를 최적화하면 해결됩니다.

## 참고 자료

- [프로젝트 GitHub](https://github.com/sw-woo/pdf-rag-streamlit)
- [LangChain 청킹 가이드](https://python.langchain.com/docs/modules/data_connection/document_transformers/)
- [Chroma 성능 최적화](https://docs.trychroma.com/usage-guide)
