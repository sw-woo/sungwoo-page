---
title: "Flutter와 TensorFlow Lite를 활용한 모바일 ML 앱 개발"
date: "2024-12-10"
excerpt: "Flutter 앱에 TensorFlow Lite를 통합하여 실시간 이미지 분류 기능을 구현하는 방법을 배워봅니다."
tags: ["Flutter", "Machine Learning", "TensorFlow", "Mobile"]
author: "Sungwoo"
---

# Flutter와 ML: 모바일에서 AI 구현하기

모바일 디바이스에서 직접 머신러닝 모델을 실행하면 오프라인에서도 작동하고 프라이버시를 보장할 수 있습니다.

## TensorFlow Lite란?

TensorFlow Lite는 모바일 및 임베디드 디바이스에서 머신러닝을 실행하기 위한 경량 솔루션입니다.

## Flutter 프로젝트 설정

```yaml
dependencies:
  flutter:
    sdk: flutter
  tflite_flutter: ^0.10.0
  image_picker: ^1.0.0
```

## 모델 통합

```dart
import 'package:tflite_flutter/tflite_flutter.dart';

class MLModel {
  Interpreter? _interpreter;

  Future<void> loadModel() async {
    _interpreter = await Interpreter.fromAsset('model.tflite');
  }

  Future<List<double>> runInference(List<List<List<num>>> input) async {
    var output = List.filled(1 * 1000, 0).reshape([1, 1000]);
    _interpreter!.run(input, output);
    return output[0];
  }
}
```

## 실시간 이미지 분류

카메라나 갤러리에서 이미지를 가져와 실시간으로 분류할 수 있습니다.

## 성능 최적화

- 모델 양자화 사용
- 입력 이미지 크기 최적화
- GPU 가속 활용

## 실제 프로젝트

제 [Flutter TFLite 프로젝트](https://github.com/sw-woo/Flutter_tflite_classfication_songdo)를 참고하세요!

## 마무리

Flutter와 TensorFlow Lite의 조합은 강력한 ML 모바일 앱을 만들 수 있는 완벽한 솔루션입니다.
