package link.hoangthao.sample.oauth2client.service;

import link.hoangthao.sample.oauth2client.model.Employee;
import reactor.core.publisher.Flux;

public interface EmployeeService {
    public Flux<Employee> getEmployees();
}