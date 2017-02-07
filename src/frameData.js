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
      args: [103, -1336, 208, 324],
      transform: simulatePerspective(0.447, 4.38),
      rotate: rotate(0),
      flip: true
    },
    right: {
      args: [223, -1140, 230, 328],
      transform: simulatePerspective(0.445, 4.3),
      rotate: rotate(0),
      flip: true
    }
  },
  {
    trump: 'trump_002',
    left: {
      args: [297, -1005, 186, 290],
      transform: simulatePerspective(0.735, 4.3),
      rotate: rotate(0),
      flip: true
    },
    right: {
      args: [460, -1020, 226, 311],
      transform: simulatePerspective(0.7, 4.3),
      rotate: rotate(0),
      flip: true
    }
  },
  {
    trump: 'trump_004',
    left: {
      args: [610, -723, 170, 280],
      transform: simulatePerspective(1.11, 4.31),
      rotate: rotate(0),
      flip: true
    },
    right: {
      args: [810, -740, 229, 303],
      transform: simulatePerspective(1.11, 4.32),
      rotate: rotate(0),
      flip: true
    }
  },
  {
    trump: 'trump_006',
    left: {
      args: [480, -480, 64, 265],
      transform: [1, 0.08, -0.05, 1, 0, 0],
      rotate: rotate(88),
      flip: false
    },
    right: {
      args: [553, -502, 85, 302],
      transform: [1, 0, 0, 1, 0, 0],
      rotate: rotate(92),
      flip: false
    }
  },
  {
    trump: 'trump_008',
    left: {
      args: [495, -310, 60, 262],
      transform: [1, 0, 0.3, 1, 0, 0],
      rotate: rotate(90),
      flip: false
    },
    right: {
      args: [560, -320, 83, 288],
      transform: [1, 0, 0.3, 1, 0, 0],
      rotate: rotate(90),
      flip: false
    }
  },
  {
    trump: 'trump_010',
    left: {
      args: [495, -315, 60, 258],
      transform: [1, 0, 0.3, 1, 0, 0],
      rotate: rotate(90),
      flip: false
    },
    right: {
      args: [560, -325, 83, 288],
      transform: [1, 0, 0.3, 1, 0, 0],
      rotate: rotate(90),
      flip: false
    }
  },
  {
    trump: 'trump_012',
    left: {
      args: [493, -237, 60, 253],
      transform: [1, 0, 0.4, 1, 0, 0],
      rotate: rotate(89),
      flip: false
    },
    right: {
      args: [556, -282, 82, 285],
      transform: [1, 0, 0.35, 1, 0, 0],
      rotate: rotate(89),
      flip: false
    }
  },
  {
    trump: 'trump_014',
    left: {
      args: [446, -300, 115, 253],
      transform: [1, 0, 0.2, 1, 0, 0],
      rotate: rotate(86),
      flip: false
    },
    right: {
      args: [558, -218, 82, 286],
      transform: [1, 0, 0.4, 1, 0, 0],
      rotate: rotate(86),
      flip: false
    }
  },
  {
    trump: 'trump_016',
    left: {
      args: [408, -235, 153, 253],
      transform: [1, 0, 0.15, 1, 0, 0],
      rotate: rotate(77),
      flip: false
    },
    right: {
      args: [528, -116, 82, 302],
      transform: [1, 0, 0.45, 1, 0, 0],
      rotate: rotate(77.5),
      flip: false
    }
  },
  {
    trump: 'trump_018',
    left: {
      args: [98, -51, 177, 246],
      transform: simulatePerspective(0.845, 0.25),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [300, -24, 122, 295],
      transform: simulatePerspective(0.78, 0.55),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_020',
    left: {
      args: [58, -35, 177, 235],
      transform: simulatePerspective(0.554, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [258, -24, 176, 278],
      transform: simulatePerspective(0.52, 0.5),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_022',
    left: {
      args: [70, -22, 182, 234],
      transform: simulatePerspective(0.42, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [260, -15, 176, 258],
      transform: simulatePerspective(0.38, 0.3),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_024',
    left: {
      args: [86, 7, 184, 238],
      transform: simulatePerspective(0.23, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [282, 3, 191, 244],
      transform: simulatePerspective(0.24, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_026',
    left: {
      args: [130, 57, 169, 248],
      transform: simulatePerspective(0.06, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [310, 54, 188, 236],
      transform: simulatePerspective(0.08, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_028',
    left: {
      args: [150, 96, 156, 254],
      transform: simulatePerspective(-0.04, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [320, 93, 172, 234],
      transform: simulatePerspective(-0.02, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_030',
    left: {
      args: [140, 110, 148, 254],
      transform: simulatePerspective(-0.09, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [300, 105, 172, 236],
      transform: simulatePerspective(-0.07, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_032',
    left: {
      args: [150, 93, 135, 256],
      transform: simulatePerspective(-0.05, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [294, 96, 178, 234],
      transform: simulatePerspective(-0.055, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_034',
    left: {
      args: [143, 90, 142, 256],
      transform: simulatePerspective(-0.042, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [294, 92, 178, 234],
      transform: simulatePerspective(-0.04, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_036',
    left: {
      args: [137, 90, 142, 256],
      transform: simulatePerspective(-0.042, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [290, 92, 178, 234],
      transform: simulatePerspective(-0.04, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_038',
    left: {
      args: [137, 86, 141, 256],
      transform: simulatePerspective(-0.042, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [289, 88, 178, 234],
      transform: simulatePerspective(-0.04, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_040',
    left: {
      args: [134, 84, 141, 250],
      transform: simulatePerspective(-0.042, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [286, 84, 178, 232],
      transform: simulatePerspective(-0.04, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_042',
    left: {
      args: [132, 84, 141, 250],
      transform: simulatePerspective(-0.042, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [283, 84, 178, 233],
      transform: simulatePerspective(-0.04, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_044',
    left: {
      args: [132, 84, 141, 250],
      transform: simulatePerspective(-0.042, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [283, 84, 178, 233],
      transform: simulatePerspective(-0.04, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_046',
    left: {
      args: [129, 74, 142, 251],
      transform: simulatePerspective(-0.042, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [282, 76, 178, 233],
      transform: simulatePerspective(-0.04, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_048',
    left: {
      args: [100, 63, 155, 253],
      transform: simulatePerspective(-0.03, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [266, 63, 185, 238],
      transform: simulatePerspective(-0.03, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_050',
    left: {
      args: [47, 55, 178, 253],
      transform: simulatePerspective(-0.01, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [232, 60, 192, 246],
      transform: simulatePerspective(-0.028, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_052',
    left: {
      args: [-4, 45, 194, 253],
      transform: simulatePerspective(0.05, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [188, 50, 192, 258],
      transform: simulatePerspective(0.01, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_054',
    left: {
      args: [-38, 54, 200, 256],
      transform: simulatePerspective(0.06, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [173, 50, 194, 262],
      transform: simulatePerspective(0.05, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_056',
    left: {
      args: [-28, 74, 200, 294],
      transform: simulatePerspective(0.07, 0.5),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [185, 60, 195, 264],
      transform: simulatePerspective(0.09, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_058',
    left: {
      args: [-18, 76, 200, 294],
      transform: simulatePerspective(0.06, 0.5),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [195, 65, 192, 264],
      transform: simulatePerspective(0.07, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_060',
    left: {
      args: [2, 80, 200, 294],
      transform: simulatePerspective(0.055, 0.5),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [214, 64, 194, 266],
      transform: simulatePerspective(0.066, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_062',
    left: {
      args: [14, 83, 200, 293],
      transform: simulatePerspective(0.052, 0.5),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [225, 64, 200, 268],
      transform: simulatePerspective(0.069, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_064',
    left: {
      args: [15, 83, 200, 294],
      transform: simulatePerspective(0.052, 0.5),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [230, 66, 196, 267],
      transform: simulatePerspective(0.075, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_066',
    left: {
      args: [18, 83, 200, 294],
      transform: simulatePerspective(0.06, 0.5),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [232, 66, 196, 267],
      transform: simulatePerspective(0.075, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_068',
    left: {
      args: [12, 78, 200, 292],
      transform: simulatePerspective(0.075, 0.5),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [224, 66, 196, 265],
      transform: simulatePerspective(0.075, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_070',
    left: {
      args: [-25, 72, 201, 288],
      transform: simulatePerspective(0.09, 0.5),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [185, 60, 188, 265],
      transform: simulatePerspective(0.1, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_072',
    left: {
      args: [-68, 69, 199, 281],
      transform: simulatePerspective(0.12, 0.5),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [138, 53, 175, 269],
      transform: simulatePerspective(0.14, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_074',
    left: {
      args: [-102, 64, 189, 258],
      transform: simulatePerspective(0.16, 0.35),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [90, 60, 149, 269],
      transform: simulatePerspective(0.16, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_076',
    left: {
      args: [-124, 68, 171, 258],
      transform: simulatePerspective(0.15, 0.33),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [53, 62, 132, 276],
      transform: simulatePerspective(0.15, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_078',
    left: {
      args: [-120, 70, 175, 246],
      transform: simulatePerspective(0.16, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [61, 65, 136, 282],
      transform: simulatePerspective(0.17, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_080',
    left: {
      args: [-116, 72, 176, 248],
      transform: simulatePerspective(0.14, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [71, 76, 128, 283],
      transform: simulatePerspective(0.14, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_082',
    left: {
      args: [-124, 75, 186, 255],
      transform: simulatePerspective(0.15, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [69, 74, 144, 290],
      transform: simulatePerspective(0.17, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_084',
    left: {
      args: [-125, 73, 186, 259],
      transform: simulatePerspective(0.145, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [71, 74, 143, 296],
      transform: simulatePerspective(0.155, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_086',
    left: {
      args: [-136, 69, 191, 272],
      transform: simulatePerspective(0.135, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [68, 74, 146, 305],
      transform: simulatePerspective(0.145, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_088',
    left: {
      args: [-145, 74, 199, 280],
      transform: simulatePerspective(0.145, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [62, 80, 150, 316],
      transform: simulatePerspective(0.13, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_090',
    left: {
      args: [-158, 78, 202, 284],
      transform: simulatePerspective(0.141, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [56, 80, 153, 321],
      transform: simulatePerspective(0.145, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_092',
    left: {
      args: [-169, 82, 211, 284],
      transform: simulatePerspective(0.155, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [50, 80, 156, 326],
      transform: simulatePerspective(0.145, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_094',
    left: {
      args: [-170, 81, 214, 290],
      transform: simulatePerspective(0.145, 0),
      rotate: rotate(0),
      flip: false
    },
    right: {
      args: [57, 82, 158, 331],
      transform: simulatePerspective(0.145, 0),
      rotate: rotate(0),
      flip: false
    }
  },
  {
    trump: 'trump_096',
    left: {
      args: [-80, 61, 246, 330],
      transform: simulatePerspective(0.18, 0.6),
      rotate: rotate(0),
      flip: false
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
