using System.Web.Http;
using System.Web.Mvc;

namespace Capacitacion.WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            UnityConfig.RegisterComponents();
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
