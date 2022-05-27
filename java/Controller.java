package java;

import java.lang.System.Logger;

public class Controller {
    private static final Logger logger = LoggerFactory.getLogger(Controller.class);
    
    protected Service service;

    public ModelMap getPerformOrderInfo(@ModelAttribute("OrderDto") Dto dto, ModelMap model) {
        
    }
}