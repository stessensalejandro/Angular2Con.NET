﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CapacitacionMVC.FronEnd.SPA.Models
{
    public class Movie
    {
        public string Name { get; set; }
        public string ReleaseDate { get; set; }
        public string Plot { get; set; }
        public int Runtime { get; set; }
        public string CoverLink { get; set; }
        public string Genre { get; set; }
    }
}