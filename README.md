# MUSIC GENERATION USING LSTM NEURAL NETWORKS
This project explores the exciting field of melody generation through the innovative application of Long Short-Term Memory (LSTM) neural networks. Emphasizing folk songs, the project aims to demonstrate the LSTM model's capacity to craft expressive melodies, showcasing the intricate interplay between technology and artistic expression in the realm of AI-assisted music composition.

![image](https://github.com/Harshit787898/MUSICAI/assets/119559175/09f6dc8d-86a4-4735-b91c-255c492e6d57)

## Flowchart of Design Methodology




![image](https://github.com/Harshit787898/MUSICAI/assets/119559175/9f074274-545c-4877-ae48-ad1df7a8fddf)

## Data Preprocessing




![image](https://github.com/Harshit787898/MUSICAI/assets/119559175/43588fe2-e878-425e-94b5-d706d93d073a)

## Model Training




![image](https://github.com/Harshit787898/MUSICAI/assets/119559175/3150cd7f-90ff-4433-857f-0cacf329d34d)

## Iterative working of the melody creation model




![image](https://github.com/Harshit787898/MUSICAI/assets/119559175/9da58999-175e-44c1-bccf-77555c268e6e)

## Final Melody Creation Model




# IMPLEMENTATION
## Dataset Selection:
Source of Dataset: The dataset for this project is sourced from "The Essen Folksong Collection in Kern Format," assembled by Dr. Helmut Schaffrath, with the Humdrum Kern version prepared by David Huron.
Representation: The initial dataset is in a time series representation, capturing the sequential nature of musical notes in the folk songs.
## Preprocessing the Dataset:
Mapping to Integers: The time series representation of musical notes is mapped to integer values. Each unique note is assigned a specific integer, facilitating numerical representation for the LSTM model .
One-Hot Encoding: To prepare the data for input into the LSTM network, one-hot encoding is applied to the integer-mapped notes. This transformation converts each integer into a binary vector, making the data suitable for input into the neural network.
## Determination of Unique Notes:
An analysis of the pre-processed dataset identifies and extracts unique musical notes. This step ensures that the model learns from a diverse set of musical elements during the training process.

## Partitioning into training and validation sets:
The dataset is partitioned into training and validation sets. This separation allows for effective training of the model on one subset while validating its performance on another, preventing overfitting.

## Model Creation:
The Model Creation phase is a pivotal component in the development of the music generation project, where the architecture of the Long Short-Term Memory (LSTM) neural network is meticulously devised to facilitate the generation of coherent and expressive musical compositions. This phase involves a series of decisions that profoundly impact the model's ability to capture the intricate nuances of musical patterns.
### Determination of Layers:
The first crucial decision is the determination of the number of layers in the LSTM network. A deeper architecture allows the model to capture hierarchical representations of musical patterns. The choice here is driven by the need to discern complex features within the dataset, contributing to the network's capacity to produce rich and diverse musical sequences.
### Specification of Units per Layer:
The subsequent consideration involves specifying the number of units within each layer. This decision requires a delicate balance between model complexity and computational efficiency. Increasing the number of units provides the network with the capability to learn finer details in the dataset, enhancing its ability to generate intricate musical compositions. However, this comes at the cost of increased computational demand.
### Definition of Sequence Length:
Given the sequential nature of musical compositions, defining the sequence length for training is critical. This parameter determines how far back in the sequence the model looks to discern patterns. An appropriately chosen sequence length ensures that the model captures meaningful long-term dependencies in the music, facilitating the generation of coherent and harmonious compositions.
### Activation Functions and Optimizers:
Activation functions, such as the hyperbolic tangent (tanh) and rectified linear unit (ReLU), wield significant influence in shaping the non-linear transformations within Long Short-Term Memory (LSTM) networks. Tanh, mapping input values to a range of -1 to 1, aids in mitigating the vanishing gradient problem and preserving complex relationships in sequential data. On the other hand, ReLU introduces non-linearity by outputting the input directly for positive values, proving effective in combating vanishing gradient issues. The choice between tanh and ReLU hinges on their distinct characteristics and suitability for the learning task. Tanh's centered output range aligns well with sequential data, while ReLU's simplicity addresses the vanishing gradient problem. These activation functions contribute profoundly to LSTM networks, enabling them to capture intricate sequential patterns, a critical factor in tasks like music generation.
### Compilation of the Model:
Once the architecture is defined, the model is compiled by specifying the loss function and the optimization algorithm. The choice of the loss function is tailored to the nature of the task, ensuring that the model optimizes its parameters to generate musical sequences that closely align with the training data.
## Training the Model:
The pivotal training phase deploys the LSTM model on a meticulously pre-processed dataset. This intricate process involves optimizing the model's parameters through the iterative application of backpropagation and gradient descent. Noteworthy is the project's training duration, spanning approximately 15 hours, owing to the intricate patterns inherent in folk songs. The extended timeframe underscores the model's commitment to unravelling these complexities. Through the interplay of parameter adjustments, backpropagation, and gradient descent, the model meticulously refines its understanding of folk melodies. This time-intensive process serves as the bedrock, endowing the LSTM model with the profound insights needed for crafting authentic and nuanced folk-inspired compositions .

## Music Generation:
Post the meticulous training of the model, the captivating phase of music generation commences by injecting a seed or initial tone. This marks the initiation of a nuanced interplay within the LSTM network, where predictive capabilities come to life, foreseeing subsequent notes in an iterative dance. This cyclic process gracefully unfolds, progressively weaving a complete and coherent musical sequence. At its essence, this phase serves as a compelling showcase of the model's innate ability to compose melodies deeply rooted in the rich tapestry of learned patterns. Each predictive iteration refines the model's grasp of musical intricacies, leading to the creation of harmonically rich and artistically nuanced compositions. In essence, this stage not only reveals the technical prowess of the LSTM network but also positions it as a dynamic and innovative creative collaborator. The model, now an active partner in the composition process, introduces an element of unpredictability and artistic expression that transcends traditional methods. This narrative within the project report encapsulates the synergy of art and technology, resulting in the emergence of original, expressive, and learned-pattern-infused melodies. 
## Conversion to MIDI Format:
The generated musical sequence is converted to MIDI format. This involves mapping the predicted numerical representations back to their corresponding musical notations. The resulting MIDI file is a tangible output that can be played and further analysed.
### Deployment and Integration:
Once satisfied with the generated results, the LSTM model is deployed for practical use. Integration into a user-friendly application or platform allows users to input a seed tone and receive a unique AI-generated musical composition in MIDI format.

![image](https://github.com/Harshit787898/MUSICAI/assets/119559175/fce28e69-b625-4d5f-8b84-232c8ef8fcac)

## Visual representation of the piano melody generated by the model post training.

![WhatsApp Image 2023-12-18 at 18 13 48_16cce0ad](https://github.com/Harshit787898/MUSICAI/assets/119559175/90278f9d-099a-417d-b266-b94522468cb1)
## Frontend of the project
