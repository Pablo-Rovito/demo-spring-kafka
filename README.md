# demo-spring-kafka
Simple app for consuming a Kafka topic, with a Spring service and a React app with Redux Toolkit API for state management
## setting up kafka in windows
1. Download most recent bin from https://kafka.apache.org/downloads
2. Extract the .tgz and rename main folder into something simple, with no spaces, like "kafka". 
3. Move said folder into some simple directory, with no spaces, like "c:/". So now, main folder should be something like "c:/kafka"
4. Open c:/kafka/config/server.properties in some editor and make sure that "log.dirs=c:/kafka/kafka-logs"
5. Open c:/kafka/config/zookeeper.properties in some editor and make sure that "dataDir=c:/kafka/zookeeper-data"
6. Open 2 terminals (a and b) in c:/kafka, DO NOT CLOSE THEM, and paste the following commands:
    a. .\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
    b. .\bin\windows\kafka-server-start.bat .\config\server.properties
7. Open 2 more terminals (a and b) in c:/kafka/bin/windows and paste the following commands:
    a. kafka-topics.bat --create --bootstrap-server localhost:9092 --topic test
        expected return text: created topic test
        now paste the following: kafka-console-producer.bat --broker-list localhost:9092 --topic test
    b. kafka-console-consumer.bat --topic test --bootstrap-server localhost:9092
8. Type some message into 7.a, and check that it appears in 7.b. If that´s the case, then everything´s fine and you can close 7.b. 7.a is going to be your producer.
## setting up backend
It´s a pretty simple and straightforward Spring app, so it should be enough to maven clean install it, hopefully. 
## setting up frontend
It´s a pretty simple and straightforward React app, so it should be enough to npm install && npm start it. 

Hope it´s worth your while! 

Just in case... I don´t own anything of this, I found most of this on other places, etc etc etc...