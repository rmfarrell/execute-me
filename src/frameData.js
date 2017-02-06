function simulatePerspective (a1, a2) {
  let cs = Math.cos(a1)
  let sn = Math.sin(a1)
  let h = Math.cos(a2)
  let a = 1 * cs
  let b = -1 * sn
  let c = 200
  let d = h * 1 * sn
  let e = h * 1 * cs
  let f = 200
  return [a, d, b, e, c, f]
}

function rotate (deg) {
  return deg * Math.PI / 180
}

module.exports = [
  {
    trump: 'trump_000',
    left: {
      args: [-320, -1330, 210, 320],
      transform: simulatePerspective(0.45, 4.38),
      rotate: 0
    },
    right: {
      args: [-480, -1170, 225, 320],
      transform: simulatePerspective(0.45, 4.32),
      rotate: 0
    }
  },
  {
    trump: 'trump_002',
    left: {
      args: [-530, -1125, 210, 320],
      transform: simulatePerspective(0.7, 4.35),
      rotate: 0
    },
    right: {
      args: [-765, -1125, 210, 320],
      transform: simulatePerspective(0.7, 4.35),
      rotate: 0
    }
  },
  {
    trump: 'trump_004',
    left: {
      args: [-875, -775, 200, 280],
      transform: simulatePerspective(1.1, 4.35),
      rotate: 0
    },
    right: {
      args: [-985, -725, 220, 300],
      transform: simulatePerspective(1.1, 4.30),
      rotate: 0
    }
  },
  {
    trump: 'trump_006',
    left: {
      args: [-487, -310, 92, 263],
      transform: simulatePerspective(1.49, 3.9),
      rotate: 0
    },
    right: {
      args: [-890, -345, 220, 300],
      transform: simulatePerspective(1.49, 4.15),
      rotate: 0
    }
  },
  {
    trump: 'trump_008',
    left: {
      args: [-710, -232, 120, 258],
      transform: simulatePerspective(1.63, 2.1),
      rotate: 0
    },
    right: {
      args: [-1068, -252, 200, 287],
      transform: simulatePerspective(1.625, 2),
      rotate: 0
    }
  },
  {
    trump: 'trump_010',
    left: {
      args: [-710, -232, 120, 258],
      transform: simulatePerspective(1.64, 2.1),
      rotate: 0
    },
    right: {
      args: [-1068, -252, 200, 287],
      transform: simulatePerspective(1.625, 2),
      rotate: 0
    }
  },
  {
    trump: 'trump_012',
    left: {
      args: [-960, -180, 170, 250],
      transform: simulatePerspective(1.66, 1.95),
      rotate: 0
    },
    right: {
      args: [-1192, -210, 225, 285],
      transform: simulatePerspective(1.66, 1.95),
      rotate: 0
    }
  },
  {
    trump: 'trump_014',
    left: {
      args: [-640, -162, 210, 250],
      transform: simulatePerspective(1.7, 2.15),
      rotate: 0
    },
    right: {
      args: [-1428, -72, 274, 278],
      transform: simulatePerspective(1.74, 1.88),
      rotate: 0
    }
  },
  {
    trump: 'trump_016',
    left: {
      args: [-416, -102, 190, 250],
      transform: simulatePerspective(1.89, 2.5),
      rotate: 0
    },
    right: {
      args: [-665, -40, 150, 285],
      transform: simulatePerspective(1.98, 2.24),
      rotate: 0
    }
  },
  {
    trump: 'trump_018',
    left: {
      args: [-278, -50, 178, 245],
      transform: simulatePerspective(2.3, 3.4),
      rotate: 0
    },
    right: {
      args: [-395, -70, 115, 280],
      transform: simulatePerspective(2.305, 3.4),
      rotate: 0
    }
  },
  {
    trump: 'trump_020',
    left: {
      args: [-239, -36, 178, 240],
      transform: simulatePerspective(2.58, 3.35),
      rotate: 0
    },
    right: {
      args: [-424, -44, 174, 263],
      transform: simulatePerspective(2.6, 2.8),
      rotate: 0
    }
  },
  {
    trump: 'trump_022',
    left: {
      args: [-249, -20, 180, 235],
      transform: simulatePerspective(2.73, 3.1),
      rotate: 0
    },
    right: {
      args: [-430, -30, 172, 250],
      transform: simulatePerspective(2.74, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_024',
    left: {
      args: [-271, 7, 185, 240],
      transform: simulatePerspective(2.91, 3.25),
      rotate: 0
    },
    right: {
      args: [-470, 10, 190, 245],
      transform: simulatePerspective(2.915, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_026',
    left: {
      args: [-298, 57, 167, 253],
      transform: simulatePerspective(3.09, 3.3),
      rotate: 0
    },
    right: {
      args: [-500, 50, 190, 240],
      transform: simulatePerspective(3.055, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_028',
    left: {
      args: [-307, 95, 155, 254],
      transform: simulatePerspective(3.17, 3.25),
      rotate: 0
    },
    right: {
      args: [-490, 97, 172, 240],
      transform: simulatePerspective(3.17, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_030',
    left: {
      args: [-290, 107, 146, 258],
      transform: simulatePerspective(3.22, 3.25),
      rotate: 0
    },
    right: {
      args: [-470, 110, 170, 235],
      transform: simulatePerspective(3.22, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_032',
    left: {
      args: [-285, 94, 138, 258],
      transform: simulatePerspective(3.205, 3.25),
      rotate: 0
    },
    right: {
      args: [-472, 96, 178, 235],
      transform: simulatePerspective(3.195, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_034',
    left: {
      args: [-282, 94, 146, 258],
      transform: simulatePerspective(3.205, 3.25),
      rotate: 0
    },
    right: {
      args: [-472, 93, 178, 235],
      transform: simulatePerspective(3.182, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_036',
    left: {
      args: [-276, 94, 146, 258],
      transform: simulatePerspective(3.205, 3.25),
      rotate: 0
    },
    right: {
      args: [-467, 93, 178, 235],
      transform: simulatePerspective(3.183, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_038',
    left: {
      args: [-276, 88, 146, 258],
      transform: simulatePerspective(3.205, 3.25),
      rotate: 0
    },
    right: {
      args: [-467, 88, 178, 235],
      transform: simulatePerspective(3.181, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_040',
    left: {
      args: [-276, 78, 146, 258],
      transform: simulatePerspective(3.19, 3.25),
      rotate: 0
    },
    right: {
      args: [-465, 83, 178, 235],
      transform: simulatePerspective(3.181, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_042',
    left: {
      args: [-276, 78, 146, 258],
      transform: simulatePerspective(3.18, 3.25),
      rotate: 0
    },
    right: {
      args: [-461, 84, 178, 235],
      transform: simulatePerspective(3.18, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_044',
    left: {
      args: [-276, 77, 146, 258],
      transform: simulatePerspective(3.18, 3.25),
      rotate: 0
    },
    right: {
      args: [-461, 84, 178, 235],
      transform: simulatePerspective(3.185, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_046',
    left: {
      args: [-275, 70, 145, 258],
      transform: simulatePerspective(3.18, 3.25),
      rotate: 0
    },
    right: {
      args: [-460, 78, 179, 235],
      transform: simulatePerspective(3.185, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_048',
    left: {
      args: [-255, 61, 155, 258],
      transform: simulatePerspective(3.18, 3.25),
      rotate: 0
    },
    right: {
      args: [-451, 65, 186, 238],
      transform: simulatePerspective(3.173, 3.25),
      rotate: 0
    }
  },
  {
    trump: 'trump_050',
    left: {
      args: [-223, 53, 178, 258],
      transform: simulatePerspective(3.157, 3.25),
      rotate: 0
    },
    right: {
      args: [-425, 59, 192, 248],
      transform: simulatePerspective(3.168, 3.2),
      rotate: 0
    }
  },
  {
    trump: 'trump_052',
    left: {
      args: [-186, 44, 192, 258],
      transform: simulatePerspective(3.105, 3.25),
      rotate: 0
    },
    right: {
      args: [-381, 43, 189, 260],
      transform: simulatePerspective(3.119, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_054',
    left: {
      args: [-162, 53, 202, 258],
      transform: simulatePerspective(3.09, 3.25),
      rotate: 0
    },
    right: {
      args: [-367, 49, 194, 264],
      transform: simulatePerspective(3.09, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_056',
    left: {
      args: [-172, 66, 204, 260],
      transform: simulatePerspective(3.075, 3.25),
      rotate: 0
    },
    right: {
      args: [-378, 64, 194, 264],
      transform: simulatePerspective(3.06, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_058',
    left: {
      args: [-185, 66, 204, 260],
      transform: simulatePerspective(3.075, 3.25),
      rotate: 0
    },
    right: {
      args: [-390, 64, 194, 264],
      transform: simulatePerspective(3.07, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_060',
    left: {
      args: [-205, 68, 204, 260],
      transform: simulatePerspective(3.075, 3.25),
      rotate: 0
    },
    right: {
      args: [-410, 64, 194, 264],
      transform: simulatePerspective(3.07, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_062',
    left: {
      args: [-215, 70, 204, 260],
      transform: simulatePerspective(3.09, 3.1),
      rotate: 0
    },
    right: {
      args: [-424, 66, 198, 267],
      transform: simulatePerspective(3.075, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_064',
    left: {
      args: [-215, 72, 204, 260],
      transform: simulatePerspective(3.09, 3.1),
      rotate: 0
    },
    right: {
      args: [-426, 66, 198, 267],
      transform: simulatePerspective(3.069, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_066',
    left: {
      args: [-218, 72, 204, 260],
      transform: simulatePerspective(3.08, 3.1),
      rotate: 0
    },
    right: {
      args: [-430, 65, 198, 264],
      transform: simulatePerspective(3.062, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_068',
    left: {
      args: [-211, 67, 201, 258],
      transform: simulatePerspective(3.068, 3.1),
      rotate: 0
    },
    right: {
      args: [-421, 63, 196, 267],
      transform: simulatePerspective(3.055, 3.0),
      rotate: 0
    }
  },
  {
    trump: 'trump_070',
    left: {
      args: [-176, 63, 202, 260],
      transform: simulatePerspective(3.05, 3.35),
      rotate: 0
    },
    right: {
      args: [-379, 52, 191, 268],
      transform: simulatePerspective(3.02, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_072',
    left: {
      args: [-130, 62, 200, 252],
      transform: simulatePerspective(3.02, 3.35),
      rotate: 0
    },
    right: {
      args: [-313, 52, 175, 270],
      transform: simulatePerspective(3, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_074',
    left: {
      args: [-83, 62, 186, 252],
      transform: simulatePerspective(2.99, 3.4),
      rotate: 0
    },
    right: {
      args: [-238, 60, 148, 282],
      transform: simulatePerspective(2.99, 3.4),
      rotate: 0
    }
  },
  {
    trump: 'trump_076',
    left: {
      args: [-51, 64, 173, 241],
      transform: simulatePerspective(2.97, 3.1),
      rotate: 0
    },
    right: {
      args: [-198, 60, 142, 282],
      transform: simulatePerspective(2.96, 3.4),
      rotate: 0
    }
  },
  {
    trump: 'trump_078',
    left: {
      args: [-55, 68, 176, 249],
      transform: simulatePerspective(2.985, 3),
      rotate: 0
    },
    right: {
      args: [-206, 70, 145, 276],
      transform: simulatePerspective(2.96, 3.2),
      rotate: 0
    }
  },
  {
    trump: 'trump_080',
    left: {
      args: [-63, 73, 178, 249],
      transform: simulatePerspective(2.99, 3),
      rotate: 0
    },
    right: {
      args: [-220, 70, 145, 276],
      transform: simulatePerspective(2.94, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_084',
    left: {
      args: [-63, 72, 188, 260],
      transform: simulatePerspective(2.995, 3.1),
      rotate: 0
    },
    right: {
      args: [-217, 74, 147, 295],
      transform: simulatePerspective(2.98, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_086',
    left: {
      args: [-60, 70, 195, 269],
      transform: simulatePerspective(2.99, 3.1),
      rotate: 0
    },
    right: {
      args: [-222, 72, 154, 304],
      transform: simulatePerspective(2.98, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_088',
    left: {
      args: [-56, 76, 200, 276],
      transform: simulatePerspective(2.99, 3.1),
      rotate: 0
    },
    right: {
      args: [-225, 73, 159, 314],
      transform: simulatePerspective(2.97, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_090',
    left: {
      args: [-44, 76, 202, 284],
      transform: simulatePerspective(3.002, 3.1),
      rotate: 0
    },
    right: {
      args: [-215, 80, 159, 320],
      transform: simulatePerspective(2.985, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_092',
    left: {
      args: [-38, 81, 208, 286],
      transform: simulatePerspective(3, 3.1),
      rotate: 0
    },
    right: {
      args: [-216, 80, 166, 324],
      transform: simulatePerspective(2.98, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_094',
    left: {
      args: [-40, 79, 211, 291],
      transform: simulatePerspective(3.01, 3.1),
      rotate: 0
    },
    right: {
      args: [-225, 83, 166, 324],
      transform: simulatePerspective(2.97, 3.1),
      rotate: 0
    }
  },
  {
    trump: 'trump_096',
    left: {
      args: [-162, 58, 242, 314],
      transform: simulatePerspective(2.964, 3.67),
      rotate: 0
    },
    right: {
      args: [339, -120, 84, 348],
      transform: [1, 0.95, 0, 1, 0, 0],
      rotate: rotate(10.25)
    }
  },
  {
    trump: 'trump_098',
    left: {
      args: [384, 270, 220, 220],
      transform: [1, 0, -0.3, 1, 0, 0],
      rotate: rotate(2)
    },
    right: {
      args: [0, 0, 0, 0],
      transform: [1, 0, 0, 1, 0, 0],
      rotate: rotate(0)
    }
  },
  {
    trump: 'trump_100',
    left: {
      args: [575, 495, 170, 180],
      transform: [1, 0, -0.75, 1, 0, 0],
      rotate: rotate(-12)
    },
    right: {
      args: [0, 0, 0, 0],
      transform: [1, 0, 0, 1, 0, 0],
      rotate: rotate(0)
    }
  },
  {
    trump: 'trump_102',
    left: {
      args: [0, 0, 0, 0],
      transform: [1, 0, 0, 1, 0, 0],
      rotate: rotate(0)
    },
    right: {
      args: [0, 0, 0, 0],
      transform: [1, 0, 0, 1, 0, 0],
      rotate: rotate(0)
    }
  },
  {
    trump: 'trump_104',
    left: {
      args: [0, 0, 0, 0],
      transform: [1, 0, 0, 1, 0, 0],
      rotate: rotate(0)
    },
    right: {
      args: [0, 0, 0, 0],
      transform: [1, 0, 0, 1, 0, 0],
      rotate: rotate(0)
    }
  },
  {
    trump: 'trump_106',
    left: {
      args: [0, 0, 0, 0],
      transform: [1, 0, 0, 1, 0, 0],
      rotate: rotate(0)
    },
    right: {
      args: [0, 0, 0, 0],
      transform: [1, 0, 0, 1, 0, 0],
      rotate: rotate(0)
    }
  }
]
