package link.hoangthao.sample.oauth2client.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/v1")
public class TestController {

    @GetMapping("/test")
    public Mono<String> test() {
        return Mono.just("Hello test api!");
    }
}
