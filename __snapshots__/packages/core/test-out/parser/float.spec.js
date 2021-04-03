exports['float() float() float() Parse "" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 0
    },
    "value": 0
  },
  "errors": [
    {
      "range": {
        "start": 0,
        "end": 0
      },
      "message": "Expected a float",
      "severity": 3
    }
  ]
}

exports['float() float() float() Parse ".E" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 2
    },
    "value": 0
  },
  "errors": [
    {
      "range": {
        "start": 0,
        "end": 2
      },
      "message": "Illegal float numeral that doesn't follow /[-+]?(?:[0-9]+\\.|[0-9]*\\.[0-9]+)(?:e[-+]?[0-9]+)?/i",
      "severity": 3
    }
  ]
}

exports['float() float() float() Parse "1.0045" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 6
    },
    "value": 1.0045
  },
  "errors": []
}

exports['float() float() float() Parse "123" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 3
    },
    "value": 123
  },
  "errors": [
    {
      "range": {
        "start": 0,
        "end": 3
      },
      "message": "Illegal float numeral that doesn't follow /[-+]?(?:[0-9]+\\.|[0-9]*\\.[0-9]+)(?:e[-+]?[0-9]+)?/i",
      "severity": 3
    }
  ]
}

exports['float() float() float() Parse "7e+3" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 4
    },
    "value": 7000
  },
  "errors": [
    {
      "range": {
        "start": 0,
        "end": 4
      },
      "message": "Illegal float numeral that doesn't follow /[-+]?(?:[0-9]+\\.|[0-9]*\\.[0-9]+)(?:e[-+]?[0-9]+)?/i",
      "severity": 3
    }
  ]
}

exports['float() float() float() Parse "foo" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 0
    },
    "value": 0
  },
  "errors": [
    {
      "range": {
        "start": 0,
        "end": 0
      },
      "message": "Expected a float",
      "severity": 3
    }
  ]
}

exports['float() float(min, max, onOutOfRange) float(1, 6, (ans,_src,ctx)=>{cov_1ydeszz2j5().f[6]++;cov_1ydeszz2j5().s[20]++;return ctx.err.report(\'Testing MESSAGE\',ans);}) Parse "0.0" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 3
    },
    "value": 0
  },
  "errors": [
    {
      "range": {
        "start": 0,
        "end": 3
      },
      "message": "Testing MESSAGE",
      "severity": 3
    }
  ]
}

exports['float() float(min, max, onOutOfRange) float(1, 6, (ans,_src,ctx)=>{cov_1ydeszz2j5().f[6]++;cov_1ydeszz2j5().s[20]++;return ctx.err.report(\'Testing MESSAGE\',ans);}) Parse "3.0" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 3
    },
    "value": 3
  },
  "errors": []
}

exports['float() float(min, max, onOutOfRange) float(1, 6, (ans,_src,ctx)=>{cov_1ydeszz2j5().f[6]++;cov_1ydeszz2j5().s[20]++;return ctx.err.report(\'Testing MESSAGE\',ans);}) Parse "9.0" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 3
    },
    "value": 9
  },
  "errors": [
    {
      "range": {
        "start": 0,
        "end": 3
      },
      "message": "Testing MESSAGE",
      "severity": 3
    }
  ]
}

exports['float() float(min, max, onOutOfRange) float(1, undefined, undefined) Parse "0.0" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 3
    },
    "value": 0
  },
  "errors": [
    {
      "range": {
        "start": 0,
        "end": 3
      },
      "message": "Expected a float between 1 and +∞",
      "severity": 3
    }
  ]
}

exports['float() float(min, max, onOutOfRange) float(1, undefined, undefined) Parse "3.0" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 3
    },
    "value": 3
  },
  "errors": []
}

exports['float() float(min, max, onOutOfRange) float(1, undefined, undefined) Parse "9.0" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 3
    },
    "value": 9
  },
  "errors": []
}

exports['float() float(min, max, onOutOfRange) float(undefined, 6, undefined) Parse "0.0" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 3
    },
    "value": 0
  },
  "errors": []
}

exports['float() float(min, max, onOutOfRange) float(undefined, 6, undefined) Parse "3.0" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 3
    },
    "value": 3
  },
  "errors": []
}

exports['float() float(min, max, onOutOfRange) float(undefined, 6, undefined) Parse "9.0" 1'] = {
  "node": {
    "type": "float",
    "range": {
      "start": 0,
      "end": 3
    },
    "value": 9
  },
  "errors": [
    {
      "range": {
        "start": 0,
        "end": 3
      },
      "message": "Expected a float between -∞ and 6",
      "severity": 3
    }
  ]
}