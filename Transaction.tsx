import React, { Component } from 'react';

import {ResourceBase} from './ClsTest1'


class DealerAuto {
  constructor(){
    //super();
  }

}

export class DealerAutoAdvanced extends DealerAuto {
  ratioExpected : number
  ratioExpectedTolerance : number

  constructor(){
    super();

    var r1dc = new ResourceBase();
  }

  test( ):void {
    var r1d = new ResourceBase();
    r1d.maxPeriodZeroOut = 100;
    
  }
  
}

