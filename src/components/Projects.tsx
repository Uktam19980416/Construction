import React from 'react';
import { DirectionAwareHover } from './ui/direction-aware-hover';

export const Projects = () => {
  return (
    <div className="container w-[1440px] max-w-4/5 mx-auto mt-10 max-xl:w-[95%] max-sm:px-2 max-sm:w-full">
      <div className="my-10">
        <p className="text-4xl max-iphone:text-2xl max-iphone:text-center">Your dream home</p>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
      <DirectionAwareHover
          imageUrl="./src/images/projects.53437eda10adf8ee97f3.jpg"
          className="custom-class-name"
          childrenClassName="text-class-name"
          imageClassName="image-class-name"
        >
          <div>
            <p className="text-5xl text-slate-50 max-lg:text-3xl max-md:text-5xl max-iphone:text-3xl max-smallest:text-2xl">Magic City</p>
            <p className="text-2xl mt-2 text-slate-50 max-lg:text-lg max-md:text-2xl max-iphone:text-lg max-smallest:text-xs">
              This is a large-scale socially significant project. The cultural
              and entertainment cluster in Tashkent is one of the new
              attractions.
            </p>
          </div>
        </DirectionAwareHover>
        <DirectionAwareHover
          imageUrl="./src/images/project.90d0ad1f2b01cab38a88.jpg"
          className="custom-class-name"
          childrenClassName="text-class-name"
          imageClassName="image-class-name"
        >
          <div>
            <p className="text-5xl text-slate-50 max-lg:text-3xl max-md:text-5xl max-iphone:text-3xl max-smallest:text-2xl">Gardens Residence</p>
            <p className="text-2xl mt-2 text-slate-50 max-lg:text-lg max-md:text-2xl max-iphone:text-lg max-smallest:text-xs">
            Multifunctional residential complex created to provide comfort to the residents of Uzbekistan.
            </p>
          </div>
        </DirectionAwareHover>
        <DirectionAwareHover
          imageUrl="./src/images/prezident.39ffbd8cd3007f491559.jpg"
          className="custom-class-name"
          childrenClassName="text-class-name"
          imageClassName="image-class-name"
        >
          <div>
            <p className="text-5xl text-slate-50 max-lg:text-3xl max-md:text-5xl max-iphone:text-3xl max-smallest:text-2xl">Fonon</p>
            <p className="text-2xl mt-2 text-slate-50 max-lg:text-lg max-md:text-2xl max-iphone:text-lg max-smallest:text-xs">
            A grandiose residential area in the heart of the capital.
            </p>
          </div>
        </DirectionAwareHover>

        <DirectionAwareHover
          imageUrl="./src/images/school.40d7b4718a3ea2005b09.jpg"
          className="custom-class-name"
          childrenClassName="text-class-name"
          imageClassName="image-class-name"
        >
          <div>
            <p className="text-5xl text-slate-50 max-lg:text-3xl max-md:text-5xl max-iphone:text-3xl max-smallest:text-2xl">Fonon</p>
            <p className="text-2xl mt-2 text-slate-50 max-lg:text-lg max-md:text-2xl max-iphone:text-lg max-smallest:text-xs">
            A grandiose residential area in the heart of the capital.
            </p>
          </div>
        </DirectionAwareHover>
        <DirectionAwareHover
          imageUrl="./src/images/image.55d1ad86051dd5af382b.jpg"
          className="custom-class-name"
          childrenClassName="text-class-name"
          imageClassName="image-class-name"
        >
          <div>
            <p className="text-5xl text-slate-50 max-lg:text-3xl max-md:text-5xl max-iphone:text-3xl max-smallest:text-2xl">Fonon</p>
            <p className="text-2xl mt-2 text-slate-50 max-lg:text-lg max-md:text-2xl max-iphone:text-lg max-smallest:text-xs">
            A grandiose residential area in the heart of the capital.
            </p>
          </div>
        </DirectionAwareHover>
        <DirectionAwareHover
          imageUrl="./src/images/image1.59ddf8dcd5ee2719efdc.jpg"
          className="custom-class-name"
          childrenClassName="text-class-name"
          imageClassName="image-class-name"
        >
          <div>
            <p className="text-5xl text-slate-50 max-lg:text-3xl max-md:text-5xl max-iphone:text-3xl max-smallest:text-2xl">Fonon</p>
            <p className="text-2xl mt-2 text-slate-50 max-lg:text-lg max-md:text-2xl max-iphone:text-lg max-smallest:text-xs">
            A grandiose residential area in the heart of the capital.
            </p>
          </div>
        </DirectionAwareHover>
      </div>
    </div>
  );
};