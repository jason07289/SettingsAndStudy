# 스프링/스프링부트 어노테이션 정리


### @ComponentScan
- @Component와 @Service, @Repository, @Controller, @Configuration이 붙은 클래스 Bean들을 찾아서 Context에 bean 등록을 해준다.
- @Repository, @Service, @Controller 등을 쓰는 이유: @Repository는 DAO의 메소드에서 발생할 수 있는 unchecked exception들을 스프링의 DataAccessException으로 처리할 수 있기 때문, 그리고 가독성도 크다.

### @EnableAutoConfiguration
- 스프링 애플리케이션 컨텍스트를 만들 때 자동으로 설정하는 기능을 켠다.
- classpath의 내용에 기반해서 자동 생성, 만약 tomcat-embed-core.jar가 존재하면 톰캣 서버가 Setting된다.

### @Configuration
- Configuration을 클래스에 적용하고 @Bean을 해당 클래스의 메소드에 적용하면 @Autowired로 빈을 부를 수 있다.

### @Required
- Setter 메서드에 적용해주면 빈 생성시 필수 프로퍼티 임을 알린다.

### @Qualifier("id123")
- @Autowired와 같이 쓰이며, 같은 타입의 빈 객체가 있을 때 해당 아이디를 적어 원하는 빈이 부입될 수 있도록 하는 어노테이션

### @Resource
- @Autowired와 마찬가지로 빈 객체를 주입해주는데 차이점은 Autowired는 타입으로, Resource는 이름으로 연결해준다.

### @PostConstruct, @PreConstruct
- 의존하는 객체를 생성한 이후 초기화 작업을 위해 객체 생성 전/후에 실행해야 할 메소드 앞에 붙이다.

### @PreDestroy 
- 객체를 제거하기 전에 해야할 작업을 수행하기 위해 사용.

### @PropertySource
- 해당 프로퍼티 파일을 환경으로 로딩하게 해준다.

### @ConfigurationProperties
- yaml 파일 읽는다. default로 classpath:application.properties 파일이 조회된다.                                      
- 속성 클래스를 따로 만들고 그위에 (prefix="mail")을 써서 접두사 사용가능.
  
    mail.host = mailserver@mail.com

    mail.port = 9000

    mail.defaultRecipients[0] = admin@mail.com

    mail.defaultRecipients[1] = customer@mail.com

### @Lazy
- 자연로딩을 지원한다.
- @Component나 @Bean 어노테이션과 같이 쓰는데 클래스가 로드될 때 스프링에서 바로 bean 등록을 마치는 것이 아니라실제로 사용될 때 로딩이 이뤄지게 하는 방법이다.

### @Value
- properties에서 값을 가져와 적용할 때 사용한다.

### @SpringBootApplication
- @Configuration, @EnableAutoConfiguration, @ComponentScan 3가지를 하나의 어노테이션으로 합친 것이다.

### @RequestMapping
- 요청 URL을 어떤 메서드가 처리할지 mapping해주는 어노테이션.
- 컨트롤러나 컨트롤러의 메서드에 적용
  
    @RequestMapping("/list"), @RequestMapping("/home, /about");

    @RequestMapping("/admin", method=RequestMethod.GET)

### @CookieValue
- 쿠키 값을 파라미터로 전달 받을 수 있는 방법.
- 해당 쿠키가 존재하지 않으면 500 에러를 발생시킨다.
- 속성으로 required가 있는데 default는 true다. false를 적용하면 해당 쿠키 값이 없을 때 null로 받고 에러를 발생시키지 않는다.
- public String view(@CookieValue(value="auth")String auth){};// 쿠키의 key가 auth에 해당하는 값을 가져옴

### @CrossOrigin
- CORS 보안상의 문제로 브라우저에서 리소스를 현재 Origin에서 다른 곳으로의 AJAX 요청을 방지하는 것이다.
- @RequestMapping이 있는 곳에 사용하면 해당 요청은 타 도메인에서 온 ajax요청을 처리해준다.
- @CrossOrigin(origins = "http://jeong-pro.tistory.com", maxAge = 3600)
  -> 기본 도메인이 http://jeong-pro.tistory.com 인 곳에서 온 ajax 요청만 받아주겠다.

### @ModelAttribute
- view에서 전달해주는 파라미터를 클래스(VO/DTO)의 멤버 변수로 binding 해주는 어노테이션

### @GetMapping
- @RequestMapping(Method=RequestMethod.GET)과 같음
- @PostMapping, @PutMapping, @PatchMapping, @DeleteMapping은 유추가능

### @SessionAttributes
- 세션에 데이터를 넣을 때 쓰는 어노테이션
- @SessionAttributes("name")이라고 하면 Model에 Key값이 "name"으로 있는 값은 자동으로 세션에도 저장되게 한다.

### @RequestBody
- 요청이 온 데이터(JSON이나 XML형식)를 바로 클래스나 model로 매핑하기 위한 어노테이션 

### @RequestParam
- request의 parameter에서 가져오는 것, 메소드의 파라미터에서 사용된다.

### @PathVariable
- 해당 URL에서 {특정값}을 변수로 받아 올 수 있다. 메소드의 파라미터에서 사용된다.

### @ResponseBody
- view가 아닌 JSON 형식의 값을 응답할때 사용, 문자열을 리턴하면 그 값을 http response header가 아닌 response body에 들어간다.
- 만약 객체를 return하는 경우 JACKSON 라이브러리에 의해 문자열로 변환되어 전송된다.
- context에 설정된 resolver를 무시함.

### @Transactional
- 데이터베이스 트랜잭션을 설정하고 싶은 메서드에 어노테이션을 적용하면 메서드 내부에서 일어나는 데이터베이스 로직이 전부 성공하게 되거나 데이터베이스 접근중 하나라도 실패하면 다시 롤백할 수 있게 해주는 어노테이션
- @Transaction(readOnly=true, rollbackFor=Exception.class):readOnly는 읽기전용임을 알리고 rollbackFor는 해당 Exception이 생기면 롤백하라는 뜻
- @Transaction(noRollbackFor=Exception.class)는 해당 Exception이 나타나도 롤백하지 말라는 뜻
- @Transaction(timeout=10)은 10초안에 해당 로직을 수행하지 못하면 롤백하라는 뜻.

