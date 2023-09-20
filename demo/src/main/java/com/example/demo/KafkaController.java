package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin
@RestController
public class KafkaController {
    @Autowired
    KafkaConsumerService listener;

    @GetMapping(path = "/getMessage")
    public ResponseEntity<ResponseDTO> getMessage() {
        try{
            return ResponseEntity.ok(new ResponseDTO("OK", listener.getMessage()));
        } catch (Exception e) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, "endpoint reached but something bad happened."
            );
        }

    }

    @GetMapping(path = "/")
    public ResponseEntity<ResponseDTO> connectionTest() {
        try{
            return ResponseEntity.ok(new ResponseDTO("OK", "Conexión exitosa"));
        } catch (Exception e) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, "endpoint reached but couldn´t deliver new message"
            );
        }
    }
}