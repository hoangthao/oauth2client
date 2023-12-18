//package link.hoangthao.sample.oauth2client.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
//import org.springframework.security.config.web.server.ServerHttpSecurity;
//import org.springframework.security.web.server.SecurityWebFilterChain;
//
//@EnableWebFluxSecurity
//public class SecurityConfiguration {
//
//    @Bean
//    public SecurityWebFilterChain configure(ServerHttpSecurity http) throws Exception {
//        return http.authorizeExchange(authz ->
//                        authz.pathMatchers("/actuator/*",
//                                        "/unauthenticated",
//                                        "/api/v1/test").permitAll()
//                                .anyExchange().authenticated())
//                .oauth2Login(Customizer.withDefaults())
//                .build();
//    }
//}
