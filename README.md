# Coffee_Recognize
[![CI](https://github.com/Lucs1590/Coffee_Recognize/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/Lucs1590/Coffee_Recognize/actions/workflows/main.yml)
[![Code Coverage](https://github.com/Lucs1590/Coffee_Recognize/actions/workflows/coverage.yml/badge.svg)](https://github.com/Lucs1590/Coffee_Recognize/actions/workflows/coverage.yml)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.png?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Join the chat at https://gitter.im/Coffee_Recognize/community](https://badges.gitter.im/Coffee_Recognize/community.svg)](https://gitter.im/Coffee_Recognize/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is a graduation project developed by [Alvaro Leandro Cavalcante Carneiro](https://github.com/AlvaroCavalcante) and [Lucas de Brito Silva](https://github.com/Lucs1590). The objective is to detect the disease in the coffee leaf and the contamination percentage.

## ABSTRACT
Pest and disease control play a key role in agriculture since the damage caused by these agents are responsible for a huge economic loss every year. Based on this assumption, we create an algorithm capable of detecting rust (Hemileia vastatrix) and leaf miner (Leucoptera coffeella) in coffee leaves (Coffea arabica) and quantify disease severity using a mobile application as a high-level interface for making the model inferences. We used different convolutional neural network architectures to create the object detector, besides the OpenCV library, k-means, and three treatments: the RGB and value to quantification, and the AFSoft software, in addition to the analysis of variance, in which we compare the three methods to each other. The results show an average precision of 81,5% in the detection and that there was no significant statistical difference between treatments to quantify the severity of coffee leaves, proposing a computationally less costly method. The application, together with the trained model, can detect the pest and disease over different image conditions and infection stages and also estimate the disease infection stage.

### key-words
Deep learning; Object detection; Convolutional neural networks; Artificial intelligence; Plant disease identification.

## Dependencies
In this project we use the Ionic framework as well as its dependencies such as cord, angular and the like. To install it is a prerequisite to have a node and npm environment.
So, just run:
```bash
npm install
```
In some cases, it may be necessary to add ```--force``` when performing the above command.
## How to run?
Assuming that the installation of the premises has gone well, to execute the project on a local machine, just execute:
```bash
ionic serve
```
To perform a transpilation to add the application to your phone, there may be differences according to each environment, so for more details, visit: https://ionicframework.com/docs/cli/commands/cordova-build

## How it works?
This is only a part of the whole project, with here, basically, the interface between the user and the model. An image to portray well what the process is, can be found below:

![Flowchart]()

The API part can be accessed at: https://github.com/AlvaroCavalcante/Coffee_Recognize_API


---
This project has had a computer program patent since 2020, registered under the registration number BR512020002830-6, and is entitled "Coffee Recognition" in INPI - Instituto Nacional da Propriedade Industrial. To more details access: https://drive.google.com/file/d/1XFFTJUf2qgwrt7EklavwuJ5bTZdh7v32/view?usp=sharing