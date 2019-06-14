// ClsTest1.tsx
import React, { Component } from 'react';
class AbstractMain001 {
  
}




class ResourceTypeBase {
  reducingRate : number  // reducing factor (*) per period of time
  maxPeriodZeroOut : number 
  
}

class TimeExcel {
  time : number
}

export class ResourceBase extends ResourceTypeBase {
  TimeCreated: TimeExcel

  constructor(){
    super();
    
  }

}



function testBox() {
   var r1 = new ResourceBase();
   

}

//export default ResourceBase;
