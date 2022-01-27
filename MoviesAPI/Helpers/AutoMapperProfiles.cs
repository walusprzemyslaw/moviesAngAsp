using AutoMapper;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<GenreDTO, Genre>().ReverseMap();
            CreateMap<GenreCreationDTO, Genre>().ReverseMap();
            CreateMap<ActorCreationDTO, Actor>().ReverseMap();
            CreateMap<ActorDTO, Actor>().ReverseMap()
                                        .ForMember(x => x.Picture, options => options.Ignore());
        }
    }
}
