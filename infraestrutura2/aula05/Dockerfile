FROM openjdk:11
WORKDIR /helloworld/
COPY HelloWorld.java /helloworld/
RUN ["javac", "HelloWorld.java"]
ENTRYPOINT ["java", "HelloWorld"]