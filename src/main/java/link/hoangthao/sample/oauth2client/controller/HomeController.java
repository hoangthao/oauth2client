package link.hoangthao.sample.oauth2client.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.reactive.result.view.Rendering;
import reactor.core.publisher.Mono;

@Controller
public class HomeController {

    @GetMapping("/")
    public Mono<Rendering> app() {
        return Mono.just(Rendering.view("index").build());
    }
}
