using Capacitacion.Data.Migrations;
using Capacitacion.Entities;
using System.Data.Entity;

namespace Capacitacion.Data
{
    public class DomainContext : DbContext
    {
        public DomainContext() : base("DomainContext")
        {
            Database.SetInitializer<DomainContext>(new MigrateDatabaseToLatestVersion<DomainContext, Configuration>());
            //Database.Initialize(false);
        }

        

        public IDbSet<Genre> Genres { get; set; }
        public IDbSet<Movie> Movies { get; set; }
    }
}
