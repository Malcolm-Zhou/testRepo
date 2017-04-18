1.
~~~~
WARN  [main] (junit) [CloseAwareApplicationContext] Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanDefinitionStoreException: Invalid bean definition with name 'updateStockLevelsToAccommodationOfferingJob' defined in class path resource [travelservices-spring.xml]: Could not resolve placeholder 'HYBRIS_BIN_DIR' in string value "${HYBRIS_BIN_DIR}/ext-travel"; nested exception is java.lang.IllegalArgumentException: Could not resolve placeholder 'HYBRIS_BIN_DIR' in string value "${HYBRIS_BIN_DIR}/ext-travel"
WARN  [main] (junit) [CloseAwareApplicationContext] Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanDefinitionStoreException: Invalid bean definition with name 'updateStockLevelsToAccommodationOfferingJob' defined in class path resource [travelservices-spring.xml]: Could not resolve placeholder 'HYBRIS_BIN_DIR' in string value "${HYBRIS_BIN_DIR}/ext-travel"; nested exception is java.lang.IllegalArgumentException: Could not resolve placeholder 'HYBRIS_BIN_DIR' in string value "${HYBRIS_BIN_DIR}/ext-travel"
ERROR [main] (junit) [HybrisContextFactory] Error initializing global application context!
 org.springframework.beans.factory.BeanDefinitionStoreException: Invalid bean definition with name 'updateStockLevelsToAccommodationOfferingJob' defined in class path resource [travelservices-spring.xml]: Could not resolve placeholder 'HYBRIS_BIN_DIR' in string value "${HYBRIS_BIN_DIR}/ext-travel"; nested exception is java.lang.IllegalArgumentException: Could not resolve placeholder 'HYBRIS_BIN_DIR' in string value "${HYBRIS_BIN_DIR}/ext-travel"
	at org.springframework.beans.factory.config.PlaceholderConfigurerSupport.doProcessProperties(PlaceholderConfigurerSupport.java:223) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.config.PropertyPlaceholderConfigurer.processProperties(PropertyPlaceholderConfigurer.java:222) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.config.PropertyResourceConfigurer.postProcessBeanFactory(PropertyResourceConfigurer.java:86) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.context.support.PostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors(PostProcessorRegistrationDelegate.java:284) ~[spring-context-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.context.support.PostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors(PostProcessorRegistrationDelegate.java:166) ~[spring-context-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.context.support.AbstractApplicationContext.invokeBeanFactoryPostProcessors(AbstractApplicationContext.java:681) ~[spring-context-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:523) ~[spring-context-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at de.hybris.platform.core.HybrisContextFactory.refreshContext(HybrisContextFactory.java:95) [coreserver.jar:?]
	at de.hybris.platform.core.HybrisContextFactory$ApplicationContextFactory.build(HybrisContextFactory.java:263) [coreserver.jar:?]
	at de.hybris.platform.core.HybrisContextHolder.getApplicationInstance(HybrisContextHolder.java:87) [coreserver.jar:?]
	at de.hybris.platform.core.AbstractTenant.createCoreApplicationContext(AbstractTenant.java:695) [coreserver.jar:?]
	at de.hybris.platform.core.AbstractTenant.doStartupSafe(AbstractTenant.java:733) [coreserver.jar:?]
	at de.hybris.platform.core.AbstractTenant.doStartUp(AbstractTenant.java:667) [coreserver.jar:?]
	at de.hybris.platform.core.Registry.assureTenantStarted(Registry.java:648) [coreserver.jar:?]
	at de.hybris.platform.core.Registry.activateTenant(Registry.java:709) [coreserver.jar:?]
	at de.hybris.platform.core.Registry.setCurrentTenant(Registry.java:553) [coreserver.jar:?]
	at de.hybris.platform.util.Utilities.setJUnitTenant(Utilities.java:1488) [coreserver.jar:?]
	at de.hybris.platform.testframework.runlistener.PlatformRunListener.testRunStarted(PlatformRunListener.java:41) [coreserver.jar:?]
	at de.hybris.platform.testframework.ChainingRunNotifierWrapper$1.notifyListener(ChainingRunNotifierWrapper.java:94) [coreserver.jar:?]
	at de.hybris.platform.testframework.ChainingRunNotifierWrapper$SafeNotifier.run(ChainingRunNotifierWrapper.java:236) [coreserver.jar:?]
	at de.hybris.platform.testframework.ChainingRunNotifierWrapper.fireTestRunStarted(ChainingRunNotifierWrapper.java:96) [coreserver.jar:?]
	at de.hybris.platform.testframework.HybrisJUnit4ClassRunner.run(HybrisJUnit4ClassRunner.java:121) [coreserver.jar:?]
	at org.junit.runner.JUnitCore.run(JUnitCore.java:137) [junit-4.12.jar:4.12]
	at com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68) [junit-rt.jar:?]
	at com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51) [junit-rt.jar:?]
	at com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:237) [junit-rt.jar:?]
	at com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70) [junit-rt.jar:?]
Caused by: java.lang.IllegalArgumentException: Could not resolve placeholder 'HYBRIS_BIN_DIR' in string value "${HYBRIS_BIN_DIR}/ext-travel"
	at org.springframework.util.PropertyPlaceholderHelper.parseStringValue(PropertyPlaceholderHelper.java:174) ~[spring-core-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.util.PropertyPlaceholderHelper.replacePlaceholders(PropertyPlaceholderHelper.java:126) ~[spring-core-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.config.PropertyPlaceholderConfigurer$PlaceholderResolvingStringValueResolver.resolveStringValue(PropertyPlaceholderConfigurer.java:258) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.config.BeanDefinitionVisitor.resolveStringValue(BeanDefinitionVisitor.java:282) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.config.BeanDefinitionVisitor.resolveValue(BeanDefinitionVisitor.java:204) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.config.BeanDefinitionVisitor.visitPropertyValues(BeanDefinitionVisitor.java:141) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.config.BeanDefinitionVisitor.visitBeanDefinition(BeanDefinitionVisitor.java:82) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.config.PlaceholderConfigurerSupport.doProcessProperties(PlaceholderConfigurerSupport.java:220) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	... 26 more
INFO  [main] (junit) [HybrisContextFactory] - Refreshing SpringContext (hybris Application context - junit) took: (15.83 s)
INFO  [main] (junit) [HybrisContextFactory] Initializing application Spring ApplicationContext for tenant junit  took: (18.95 s)
INFO  [main] (junit) [DefaultSolrServerService] Stopping Solr servers ...
INFO  [main] (junit) [DefaultSolrServerService] Stopping Solr server for instance [name: default, hostname: localhost, port: 8983]
de.hybris.platform.core.UninstantiableCoreApplicationContextException: Error creating Spring application context.
	at de.hybris.platform.core.AbstractTenant.doStartupSafe(AbstractTenant.java:737)
	at de.hybris.platform.core.AbstractTenant.doStartUp(AbstractTenant.java:667)
	at de.hybris.platform.core.Registry.assureTenantStarted(Registry.java:648)
	at de.hybris.platform.core.Registry.activateTenant(Registry.java:709)
	at de.hybris.platform.core.Registry.setCurrentTenant(Registry.java:553)
	at de.hybris.platform.util.Utilities.setJUnitTenant(Utilities.java:1488)
	at de.hybris.platform.testframework.runlistener.PlatformRunListener.testRunStarted(PlatformRunListener.java:41)
	at de.hybris.platform.testframework.ChainingRunNotifierWrapper$1.notifyListener(ChainingRunNotifierWrapper.java:94)
	at de.hybris.platform.testframework.ChainingRunNotifierWrapper$SafeNotifier.run(ChainingRunNotifierWrapper.java:236)
	at de.hybris.platform.testframework.ChainingRunNotifierWrapper.fireTestRunStarted(ChainingRunNotifierWrapper.java:96)
	at de.hybris.platform.testframework.HybrisJUnit4ClassRunner.run(HybrisJUnit4ClassRunner.java:121)
	at org.junit.runner.JUnitCore.run(JUnitCore.java:137)
	at com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)
	at com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)
	at com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:237)
	at com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)
Caused by: org.springframework.beans.factory.BeanDefinitionStoreException: Invalid bean definition with name 'updateStockLevelsToAccommodationOfferingJob' defined in class path resource [travelservices-spring.xml]: Could not resolve placeholder 'HYBRIS_BIN_DIR' in string value "${HYBRIS_BIN_DIR}/ext-travel"; nested exception is java.lang.IllegalArgumentException: Could not resolve placeholder 'HYBRIS_BIN_DIR' in string value "${HYBRIS_BIN_DIR}/ext-travel"
	at org.springframework.beans.factory.config.PlaceholderConfigurerSupport.doProcessProperties(PlaceholderConfigurerSupport.java:223)
	at org.springframework.beans.factory.config.PropertyPlaceholderConfigurer.processProperties(PropertyPlaceholderConfigurer.java:222)
	at org.springframework.beans.factory.config.PropertyResourceConfigurer.postProcessBeanFactory(PropertyResourceConfigurer.java:86)
	at org.springframework.context.support.PostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors(PostProcessorRegistrationDelegate.java:284)
	at org.springframework.context.support.PostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors(PostProcessorRegistrationDelegate.java:166)
	at org.springframework.context.support.AbstractApplicationContext.invokeBeanFactoryPostProcessors(AbstractApplicationContext.java:681)
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:523)
	at de.hybris.platform.core.HybrisContextFactory.refreshContext(HybrisContextFactory.java:95)
	at de.hybris.platform.core.HybrisContextFactory$ApplicationContextFactory.build(HybrisContextFactory.java:263)
	at de.hybris.platform.core.HybrisContextHolder.getApplicationInstance(HybrisContextHolder.java:87)
	at de.hybris.platform.core.AbstractTenant.createCoreApplicationContext(AbstractTenant.java:695)
	at de.hybris.platform.core.AbstractTenant.doStartupSafe(AbstractTenant.java:733)
	... 15 more
Caused by: java.lang.IllegalArgumentException: Could not resolve placeholder 'HYBRIS_BIN_DIR' in string value "${HYBRIS_BIN_DIR}/ext-travel"
	at org.springframework.util.PropertyPlaceholderHelper.parseStringValue(PropertyPlaceholderHelper.java:174)
	at org.springframework.util.PropertyPlaceholderHelper.replacePlaceholders(PropertyPlaceholderHelper.java:126)
	at org.springframework.beans.factory.config.PropertyPlaceholderConfigurer$PlaceholderResolvingStringValueResolver.resolveStringValue(PropertyPlaceholderConfigurer.java:258)
	at org.springframework.beans.factory.config.BeanDefinitionVisitor.resolveStringValue(BeanDefinitionVisitor.java:282)
	at org.springframework.beans.factory.config.BeanDefinitionVisitor.resolveValue(BeanDefinitionVisitor.java:204)
	at org.springframework.beans.factory.config.BeanDefinitionVisitor.visitPropertyValues(BeanDefinitionVisitor.java:141)
	at org.springframework.beans.factory.config.BeanDefinitionVisitor.visitBeanDefinition(BeanDefinitionVisitor.java:82)
	at org.springframework.beans.factory.config.PlaceholderConfigurerSupport.doProcessProperties(PlaceholderConfigurerSupport.java:220)
	... 26 more
Error creating Spring application context. Shutting down hybris platform since the system cannot be used without working Spring context...
shutting down hybris registry..
INFO  [Thread-4] [DefaultClusterNodeManagementService] Unregistering assigned cluster node id 0...

Process finished with exit code -1

~~~~

2.
~~~~
WARN  [main] (junit) [CloseAwareApplicationContext] Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'modifyPopulatorList$child#0' defined in class path resource [acceleratorfacades-spring.xml]: Initialization of bean failed; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'defaultAccommodationSearchQueryPageableConverter' defined in class path resource [travelservices-spring-solrfacetsearch.xml]: Cannot resolve reference to bean 'boostSearchQueryPopulator' while setting bean property 'populators' with key [5]; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No bean named 'boostSearchQueryPopulator' is defined
WARN  [main] (junit) [CloseAwareApplicationContext] Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'modifyPopulatorList$child#0' defined in class path resource [acceleratorfacades-spring.xml]: Initialization of bean failed; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'defaultAccommodationSearchQueryPageableConverter' defined in class path resource [travelservices-spring-solrfacetsearch.xml]: Cannot resolve reference to bean 'boostSearchQueryPopulator' while setting bean property 'populators' with key [5]; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No bean named 'boostSearchQueryPopulator' is defined
ERROR [main] (junit) [HybrisContextFactory] Error initializing global application context!
 org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'modifyPopulatorList$child#0' defined in class path resource [acceleratorfacades-spring.xml]: Initialization of bean failed; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'defaultAccommodationSearchQueryPageableConverter' defined in class path resource [travelservices-spring-solrfacetsearch.xml]: Cannot resolve reference to bean 'boostSearchQueryPopulator' while setting bean property 'populators' with key [5]; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No bean named 'boostSearchQueryPopulator' is defined
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:553) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:482) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:306) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:230) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:302) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:197) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:751) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:861) ~[spring-context-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:541) ~[spring-context-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at de.hybris.platform.core.HybrisContextFactory.refreshContext(HybrisContextFactory.java:95) [coreserver.jar:?]
	at de.hybris.platform.core.HybrisContextFactory$ApplicationContextFactory.build(HybrisContextFactory.java:263) [coreserver.jar:?]
	at de.hybris.platform.core.HybrisContextHolder.getApplicationInstance(HybrisContextHolder.java:87) [coreserver.jar:?]
	at de.hybris.platform.core.AbstractTenant.createCoreApplicationContext(AbstractTenant.java:695) [coreserver.jar:?]
	at de.hybris.platform.core.AbstractTenant.doStartupSafe(AbstractTenant.java:733) [coreserver.jar:?]
	at de.hybris.platform.core.AbstractTenant.doStartUp(AbstractTenant.java:667) [coreserver.jar:?]
	at de.hybris.platform.core.Registry.assureTenantStarted(Registry.java:648) [coreserver.jar:?]
	at de.hybris.platform.core.Registry.activateTenant(Registry.java:709) [coreserver.jar:?]
	at de.hybris.platform.core.Registry.setCurrentTenant(Registry.java:553) [coreserver.jar:?]
	at de.hybris.platform.util.Utilities.setJUnitTenant(Utilities.java:1488) [coreserver.jar:?]
	at de.hybris.platform.testframework.runlistener.PlatformRunListener.testRunStarted(PlatformRunListener.java:41) [coreserver.jar:?]
	at de.hybris.platform.testframework.ChainingRunNotifierWrapper$1.notifyListener(ChainingRunNotifierWrapper.java:94) [coreserver.jar:?]
	at de.hybris.platform.testframework.ChainingRunNotifierWrapper$SafeNotifier.run(ChainingRunNotifierWrapper.java:236) [coreserver.jar:?]
	at de.hybris.platform.testframework.ChainingRunNotifierWrapper.fireTestRunStarted(ChainingRunNotifierWrapper.java:96) [coreserver.jar:?]
	at de.hybris.platform.testframework.HybrisJUnit4ClassRunner.run(HybrisJUnit4ClassRunner.java:121) [coreserver.jar:?]
	at org.junit.runner.JUnitCore.run(JUnitCore.java:137) [junit-4.12.jar:4.12]
	at com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68) [junit-rt.jar:?]
	at com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51) [junit-rt.jar:?]
	at com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:237) [junit-rt.jar:?]
	at com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70) [junit-rt.jar:?]
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'defaultAccommodationSearchQueryPageableConverter' defined in class path resource [travelservices-spring-solrfacetsearch.xml]: Cannot resolve reference to bean 'boostSearchQueryPopulator' while setting bean property 'populators' with key [5]; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No bean named 'boostSearchQueryPopulator' is defined
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:359) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:108) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveManagedList(BeanDefinitionValueResolver.java:382) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:157) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1486) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1231) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:543) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:482) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:306) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:230) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:302) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:202) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.getBeansOfType(DefaultListableBeanFactory.java:509) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.getBeansOfType(DefaultListableBeanFactory.java:498) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at de.hybris.platform.converters.impl.ChildBeanPostProcessorStrategy.process(ChildBeanPostProcessorStrategy.java:51) ~[classes/:?]
	at de.hybris.platform.converters.impl.ModifyPopulatorListBeanPostProcessor.process(ModifyPopulatorListBeanPostProcessor.java:81) ~[classes/:?]
	at de.hybris.platform.converters.impl.ModifyPopulatorListBeanPostProcessor.postProcessAfterInitialization(ModifyPopulatorListBeanPostProcessor.java:74) ~[classes/:?]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsAfterInitialization(AbstractAutowireCapableBeanFactory.java:422) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1588) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:545) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	... 28 more
Caused by: org.springframework.beans.factory.NoSuchBeanDefinitionException: No bean named 'boostSearchQueryPopulator' is defined
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.getBeanDefinition(DefaultListableBeanFactory.java:677) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getMergedLocalBeanDefinition(AbstractBeanFactory.java:1180) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:284) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:202) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:275) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:197) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:351) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:108) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveManagedList(BeanDefinitionValueResolver.java:382) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:157) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1486) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1231) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:543) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:482) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:306) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:230) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:302) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:202) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.getBeansOfType(DefaultListableBeanFactory.java:509) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.getBeansOfType(DefaultListableBeanFactory.java:498) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at de.hybris.platform.converters.impl.ChildBeanPostProcessorStrategy.process(ChildBeanPostProcessorStrategy.java:51) ~[classes/:?]
	at de.hybris.platform.converters.impl.ModifyPopulatorListBeanPostProcessor.process(ModifyPopulatorListBeanPostProcessor.java:81) ~[classes/:?]
	at de.hybris.platform.converters.impl.ModifyPopulatorListBeanPostProcessor.postProcessAfterInitialization(ModifyPopulatorListBeanPostProcessor.java:74) ~[classes/:?]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsAfterInitialization(AbstractAutowireCapableBeanFactory.java:422) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1588) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:545) ~[spring-beans-4.3.3.RELEASE.jar:4.3.3.RELEASE]
	... 28 more
INFO  [main] (junit) [HybrisContextFactory] - Refreshing SpringContext (hybris Application context - junit) took: (1.554 min)
INFO  [main] (junit) [HybrisContextFactory] Initializing application Spring ApplicationContext for tenant junit  took: (1.618 min)
INFO  [main] (junit) [DefaultSolrServerService] Stopping Solr servers ...
INFO  [main] (junit) [DefaultSolrServerService] Stopping Solr server for instance [name: default, hostname: localhost, port: 8983]
de.hybris.platform.core.UninstantiableCoreApplicationContextException: Error creating Spring application context.
	at de.hybris.platform.core.AbstractTenant.doStartupSafe(AbstractTenant.java:737)
	at de.hybris.platform.core.AbstractTenant.doStartUp(AbstractTenant.java:667)
	at de.hybris.platform.core.Registry.assureTenantStarted(Registry.java:648)
	at de.hybris.platform.core.Registry.activateTenant(Registry.java:709)
	at de.hybris.platform.core.Registry.setCurrentTenant(Registry.java:553)
	at de.hybris.platform.util.Utilities.setJUnitTenant(Utilities.java:1488)
	at de.hybris.platform.testframework.runlistener.PlatformRunListener.testRunStarted(PlatformRunListener.java:41)
	at de.hybris.platform.testframework.ChainingRunNotifierWrapper$1.notifyListener(ChainingRunNotifierWrapper.java:94)
	at de.hybris.platform.testframework.ChainingRunNotifierWrapper$SafeNotifier.run(ChainingRunNotifierWrapper.java:236)
	at de.hybris.platform.testframework.ChainingRunNotifierWrapper.fireTestRunStarted(ChainingRunNotifierWrapper.java:96)
	at de.hybris.platform.testframework.HybrisJUnit4ClassRunner.run(HybrisJUnit4ClassRunner.java:121)
	at org.junit.runner.JUnitCore.run(JUnitCore.java:137)
	at com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)
	at com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)
	at com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:237)
	at com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'modifyPopulatorList$child#0' defined in class path resource [acceleratorfacades-spring.xml]: Initialization of bean failed; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'defaultAccommodationSearchQueryPageableConverter' defined in class path resource [travelservices-spring-solrfacetsearch.xml]: Cannot resolve reference to bean 'boostSearchQueryPopulator' while setting bean property 'populators' with key [5]; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No bean named 'boostSearchQueryPopulator' is defined
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:553)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:482)
	at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:306)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:230)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:302)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:197)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:751)
	at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:861)
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:541)
	at de.hybris.platform.core.HybrisContextFactory.refreshContext(HybrisContextFactory.java:95)
	at de.hybris.platform.core.HybrisContextFactory$ApplicationContextFactory.build(HybrisContextFactory.java:263)
	at de.hybris.platform.core.HybrisContextHolder.getApplicationInstance(HybrisContextHolder.java:87)
	at de.hybris.platform.core.AbstractTenant.createCoreApplicationContext(AbstractTenant.java:695)
	at de.hybris.platform.core.AbstractTenant.doStartupSafe(AbstractTenant.java:733)
	... 15 more
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'defaultAccommodationSearchQueryPageableConverter' defined in class path resource [travelservices-spring-solrfacetsearch.xml]: Cannot resolve reference to bean 'boostSearchQueryPopulator' while setting bean property 'populators' with key [5]; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No bean named 'boostSearchQueryPopulator' is defined
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:359)
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:108)
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveManagedList(BeanDefinitionValueResolver.java:382)
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:157)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1486)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1231)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:543)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:482)
	at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:306)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:230)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:302)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:202)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.getBeansOfType(DefaultListableBeanFactory.java:509)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.getBeansOfType(DefaultListableBeanFactory.java:498)
	at de.hybris.platform.converters.impl.ChildBeanPostProcessorStrategy.process(ChildBeanPostProcessorStrategy.java:51)
	at de.hybris.platform.converters.impl.ModifyPopulatorListBeanPostProcessor.process(ModifyPopulatorListBeanPostProcessor.java:81)
	at de.hybris.platform.converters.impl.ModifyPopulatorListBeanPostProcessor.postProcessAfterInitialization(ModifyPopulatorListBeanPostProcessor.java:74)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsAfterInitialization(AbstractAutowireCapableBeanFactory.java:422)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1588)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:545)
	... 28 more
Caused by: org.springframework.beans.factory.NoSuchBeanDefinitionException: No bean named 'boostSearchQueryPopulator' is defined
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.getBeanDefinition(DefaultListableBeanFactory.java:677)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getMergedLocalBeanDefinition(AbstractBeanFactory.java:1180)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:284)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:202)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:275)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:197)
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:351)
	... 47 more
Error creating Spring application context. Shutting down hybris platform since the system cannot be used without working Spring context...
shutting down hybris registry..
INFO  [Thread-4] [DefaultClusterNodeManagementService] Unregistering assigned cluster node id 0...
Disconnected from the target VM, address: '127.0.0.1:54833', transport: 'socket'

Process finished with exit code -1
~~~~

