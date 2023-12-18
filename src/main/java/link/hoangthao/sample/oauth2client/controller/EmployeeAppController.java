package link.hoangthao.sample.oauth2client.controller;

import link.hoangthao.sample.oauth2client.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.reactive.result.view.Rendering;
import reactor.core.publisher.Mono;

@Controller
public class EmployeeAppController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/emp")
    public Mono<Rendering> emp() {
        var employees = employeeService.getEmployees();
        return Mono.just(Rendering.view("emp")
                .modelAttribute("employees", employees).build());
    }
}