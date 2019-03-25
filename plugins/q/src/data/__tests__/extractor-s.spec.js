import extract, { getFieldAccessor } from '../extractor-s';
import betterExtract from '../better-extractor-s';
import q from '../dataset';

import {
  collect,
  track
} from '../../../../../packages/picasso.js/src/core/data/util';

import Benchmark from './benchmark';

describe('extractor-s', () => {
  const page = {
    qArea: {
      qLeft: 0, qTop: 5, qWidth: 3, qHeight: 3
    },
    qMatrix: [
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elijah Craig',
            qNum: 'NaN',
            qElemNumber: 12217,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.701',
            qNum: 0.701,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'William Larue Weller',
            qNum: 'NaN',
            qElemNumber: 12337,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.677',
            qNum: 0.677,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Box Advanced Masterclass',
            qNum: 'NaN',
            qElemNumber: 112,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.675',
            qNum: 0.675,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Stagg JR',
            qNum: 'NaN',
            qElemNumber: 12338,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.649',
            qNum: 0.649,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements Of Islay',
            qNum: 'NaN',
            qElemNumber: 930,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.635',
            qNum: 0.635,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Thomas Handy',
            qNum: 'NaN',
            qElemNumber: 12336,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.631',
            qNum: 0.631,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ln1',
            qNum: 'NaN',
            qElemNumber: 11249,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.625',
            qNum: 0.625,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Tormore 21y 90',
            qNum: 'NaN',
            qElemNumber: 7415,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.624',
            qNum: 0.624,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Scott\'s Selection Speyside',
            qNum: 'NaN',
            qElemNumber: 7642,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.619',
            qNum: 0.619,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The English Whisky Co',
            qNum: 'NaN',
            qElemNumber: 224,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.618',
            qNum: 0.618,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Caol Ila 15yo',
            qNum: 'NaN',
            qElemNumber: 2430,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.615',
            qNum: 0.615,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Mars Shinshu American White Oak',
            qNum: 'NaN',
            qElemNumber: 11517,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.61',
            qNum: 0.61,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Founders Private Cellar',
            qNum: 'NaN',
            qElemNumber: 7438,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.608',
            qNum: 0.608,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Glenlivet Nàdurra',
            qNum: 'NaN',
            qElemNumber: 368,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.605',
            qNum: 0.605,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements of Islay Pl3',
            qNum: 'NaN',
            qElemNumber: 11129,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.603',
            qNum: 0.603,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Fettercairn',
            qNum: 'NaN',
            qElemNumber: 682,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.603',
            qNum: 0.603,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Oc3',
            qNum: 'NaN',
            qElemNumber: 11253,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.603',
            qNum: 0.603,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Grythyttan',
            qNum: 'NaN',
            qElemNumber: 2571,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.6',
            qNum: 0.6,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Big Smoke',
            qNum: 'NaN',
            qElemNumber: 10440,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.6',
            qNum: 0.6,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Black Snake',
            qNum: 'NaN',
            qElemNumber: 12390,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.599',
            qNum: 0.599,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Society Single Cask No 39.131',
            qNum: 'NaN',
            qElemNumber: 4178,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.599',
            qNum: 0.599,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Singleton of Glendullan',
            qNum: 'NaN',
            qElemNumber: 9704,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.598',
            qNum: 0.598,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'SMWS 46.47',
            qNum: 'NaN',
            qElemNumber: 4170,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.598',
            qNum: 0.598,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Knockdhu',
            qNum: 'NaN',
            qElemNumber: 12365,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.596',
            qNum: 0.596,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Peat Reek',
            qNum: 'NaN',
            qElemNumber: 671,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.595',
            qNum: 0.595,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'A Drop of the Irish',
            qNum: 'NaN',
            qElemNumber: 12315,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.592',
            qNum: 0.5920000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Oc4',
            qNum: 'NaN',
            qElemNumber: 12118,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.591',
            qNum: 0.591,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Society Single Cask No 30.93',
            qNum: 'NaN',
            qElemNumber: 3388,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.591',
            qNum: 0.591,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Mars 2013',
            qNum: 'NaN',
            qElemNumber: 11541,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.589',
            qNum: 0.589,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Society Single Cask No 35.155',
            qNum: 'NaN',
            qElemNumber: 3381,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.588',
            qNum: 0.588,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'English Peated',
            qNum: 'NaN',
            qElemNumber: 1602,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.587',
            qNum: 0.5870000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements of Islay Ci7',
            qNum: 'NaN',
            qElemNumber: 10342,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.585',
            qNum: 0.585,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Machrie Moor Cask Strength',
            qNum: 'NaN',
            qElemNumber: 12414,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.585',
            qNum: 0.585,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Adelphis',
            qNum: 'NaN',
            qElemNumber: 12303,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.584',
            qNum: 0.584,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Society Single Cask No 77.42',
            qNum: 'NaN',
            qElemNumber: 2297,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.584',
            qNum: 0.584,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Scott\'s Selection Longmorn',
            qNum: 'NaN',
            qElemNumber: 7641,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.581',
            qNum: 0.581,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Society Single Cask No 29.190',
            qNum: 'NaN',
            qElemNumber: 3383,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.581',
            qNum: 0.581,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Red Snake',
            qNum: 'NaN',
            qElemNumber: 12317,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.58',
            qNum: 0.5800000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bergslagens',
            qNum: 'NaN',
            qElemNumber: 11995,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.58',
            qNum: 0.58,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glencoe',
            qNum: 'NaN',
            qElemNumber: 5785,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.58',
            qNum: 0.58,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Sherry Darling 5 years',
            qNum: 'NaN',
            qElemNumber: 4624,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.58',
            qNum: 0.58,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Society Single Cask No. 3.269',
            qNum: 'NaN',
            qElemNumber: 2465,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.579',
            qNum: 0.579,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Glenlivet Coupar Angus Single Cask Edition 15',
            qNum: 'NaN',
            qElemNumber: 1439,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.579',
            qNum: 0.579,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'SMWS Sample Box nr:1',
            qNum: 'NaN',
            qElemNumber: 11022,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.576',
            qNum: 0.5760000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Islay',
            qNum: 'NaN',
            qElemNumber: 5700,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.573',
            qNum: 0.573,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Octomore',
            qNum: 'NaN',
            qElemNumber: 4600,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.573',
            qNum: 0.573,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Society Single Cask No 37.77',
            qNum: 'NaN',
            qElemNumber: 3379,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.572',
            qNum: 0.5720000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Scott\'s Selection Glen Elgin',
            qNum: 'NaN',
            qElemNumber: 7640,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.571',
            qNum: 0.5710000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Port Ellen',
            qNum: 'NaN',
            qElemNumber: 648,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.569',
            qNum: 0.569,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Lg7',
            qNum: 'NaN',
            qElemNumber: 12505,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.568',
            qNum: 0.568,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bruichladdich',
            qNum: 'NaN',
            qElemNumber: 3873,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.567',
            qNum: 0.5670000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Scott\'s Selection Burnside',
            qNum: 'NaN',
            qElemNumber: 7639,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.567',
            qNum: 0.5670000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Blanton\'s',
            qNum: 'NaN',
            qElemNumber: 6241,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5655',
            qNum: 0.5655,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ledaigh',
            qNum: 'NaN',
            qElemNumber: 11211,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.565',
            qNum: 0.565,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Kavalan Solist',
            qNum: 'NaN',
            qElemNumber: 8453,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.563',
            qNum: 0.563,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'A Drop of The Irish',
            qNum: 'NaN',
            qElemNumber: 12316,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.562',
            qNum: 0.562,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Kininvie Anniversary 25yo',
            qNum: 'NaN',
            qElemNumber: 625,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.56',
            qNum: 0.56,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'North British',
            qNum: 'NaN',
            qElemNumber: 85,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.56',
            qNum: 0.56,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Old Pulteney Swedish Exclusive Single Cask',
            qNum: 'NaN',
            qElemNumber: 693,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.559',
            qNum: 0.5589999999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Moray-Glenlivet',
            qNum: 'NaN',
            qElemNumber: 1821,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.558',
            qNum: 0.5579999999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements Of Islay Lg4',
            qNum: 'NaN',
            qElemNumber: 8978,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.557',
            qNum: 0.557,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Allt-A-Bhainne',
            qNum: 'NaN',
            qElemNumber: 82,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.556',
            qNum: 0.556,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Elgin-Glenlivet',
            qNum: 'NaN',
            qElemNumber: 1820,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.556',
            qNum: 0.556,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hart Brothers Glentauchers',
            qNum: 'NaN',
            qElemNumber: 4460,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.556',
            qNum: 0.556,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Lochranza',
            qNum: 'NaN',
            qElemNumber: 8878,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.556',
            qNum: 0.556,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'SMWS 84.21',
            qNum: 'NaN',
            qElemNumber: 4167,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.556',
            qNum: 0.556,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Chichibu On The Way',
            qNum: 'NaN',
            qElemNumber: 11545,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.555',
            qNum: 0.555,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Littlemill',
            qNum: 'NaN',
            qElemNumber: 639,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.555',
            qNum: 0.5549999999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Strathclyde',
            qNum: 'NaN',
            qElemNumber: 84,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.55442857',
            qNum: 0.5544285714285714,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Mackillop\'s Choice',
            qNum: 'NaN',
            qElemNumber: 10054,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5525',
            qNum: 0.5525,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements of Islay',
            qNum: 'NaN',
            qElemNumber: 949,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.55233333',
            qNum: 0.5523333333333333,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bw6',
            qNum: 'NaN',
            qElemNumber: 4229,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.552',
            qNum: 0.552,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ci8',
            qNum: 'NaN',
            qElemNumber: 12507,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.552',
            qNum: 0.552,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Macduff',
            qNum: 'NaN',
            qElemNumber: 265,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.55125',
            qNum: 0.55125,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ferry to Islay',
            qNum: 'NaN',
            qElemNumber: 9830,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.551',
            qNum: 0.551,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenturret',
            qNum: 'NaN',
            qElemNumber: 11189,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.55',
            qNum: 0.55,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'A Drop Of The Irish',
            qNum: 'NaN',
            qElemNumber: 2488,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.54933333',
            qNum: 0.5493333333333333,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Braens of Glenlivet',
            qNum: 'NaN',
            qElemNumber: 11883,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.549',
            qNum: 0.5489999999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Ord',
            qNum: 'NaN',
            qElemNumber: 353,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.54875',
            qNum: 0.54875,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements of Islay Lg5',
            qNum: 'NaN',
            qElemNumber: 11130,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.548',
            qNum: 0.5479999999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements of Islay Lp4',
            qNum: 'NaN',
            qElemNumber: 8977,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.548',
            qNum: 0.5479999999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Founders Reserve',
            qNum: 'NaN',
            qElemNumber: 3474,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.548',
            qNum: 0.5479999999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Tobermory',
            qNum: 'NaN',
            qElemNumber: 56,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.54788889',
            qNum: 0.5478888888888889,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements of Islay Br4',
            qNum: 'NaN',
            qElemNumber: 8974,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.547',
            qNum: 0.547,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Higland Park',
            qNum: 'NaN',
            qElemNumber: 2916,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.546',
            qNum: 0.546,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Clynelish Càrn Mòr #5886',
            qNum: 'NaN',
            qElemNumber: 11629,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.545',
            qNum: 0.545,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Esk',
            qNum: 'NaN',
            qElemNumber: 7439,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.545',
            qNum: 0.545,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Auld Rare 3-pack nr.3',
            qNum: 'NaN',
            qElemNumber: 2838,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.544',
            qNum: 0.544,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ar8',
            qNum: 'NaN',
            qElemNumber: 12117,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.543',
            qNum: 0.5429999999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Port Charlotte',
            qNum: 'NaN',
            qElemNumber: 2724,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.543',
            qNum: 0.5429999999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ledaig',
            qNum: 'NaN',
            qElemNumber: 1771,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.54281818',
            qNum: 0.5428181818181818,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Blairfindy',
            qNum: 'NaN',
            qElemNumber: 12358,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.542',
            qNum: 0.542,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ma1',
            qNum: 'NaN',
            qElemNumber: 4032,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.542',
            qNum: 0.542,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Dufftown',
            qNum: 'NaN',
            qElemNumber: 7214,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5415',
            qNum: 0.5415,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Port Ellen Special Release 2015',
            qNum: 'NaN',
            qElemNumber: 11116,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.539',
            qNum: 0.539,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Whisky Agency',
            qNum: 'NaN',
            qElemNumber: 1891,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.539',
            qNum: 0.539,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Auchroisk',
            qNum: 'NaN',
            qElemNumber: 64,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.53833333',
            qNum: 0.5383333333333333,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements of Islay Br5',
            qNum: 'NaN',
            qElemNumber: 8975,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.538',
            qNum: 0.5379999999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Rotspon',
            qNum: 'NaN',
            qElemNumber: 11292,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.538',
            qNum: 0.5379999999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenallachie',
            qNum: 'NaN',
            qElemNumber: 1892,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.53777778',
            qNum: 0.5377777777777779,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Lg6',
            qNum: 'NaN',
            qElemNumber: 4227,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.537',
            qNum: 0.537,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Blair Athol',
            qNum: 'NaN',
            qElemNumber: 80,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.53685714',
            qNum: 0.5368571428571428,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Eldvatten',
            qNum: 'NaN',
            qElemNumber: 3915,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.53666667',
            qNum: 0.5366666666666667,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'SMWS 95.21',
            qNum: 'NaN',
            qElemNumber: 4164,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.535',
            qNum: 0.535,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Springbank Burgundy',
            qNum: 'NaN',
            qElemNumber: 4606,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.535',
            qNum: 0.535,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Blackadder',
            qNum: 'NaN',
            qElemNumber: 4665,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.53471429',
            qNum: 0.5347142857142856,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Tormore',
            qNum: 'NaN',
            qElemNumber: 57,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.53436364',
            qNum: 0.5343636363636364,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Mannochmore',
            qNum: 'NaN',
            qElemNumber: 2560,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.534',
            qNum: 0.534,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Miltonduff-Glenlivet',
            qNum: 'NaN',
            qElemNumber: 10268,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.534',
            qNum: 0.534,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Cally',
            qNum: 'NaN',
            qElemNumber: 1331,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.533',
            qNum: 0.5329999999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Images of Islay',
            qNum: 'NaN',
            qElemNumber: 8632,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.532',
            qNum: 0.532,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Cambus',
            qNum: 'NaN',
            qElemNumber: 637,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.53125',
            qNum: 0.53125,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Dumbarton',
            qNum: 'NaN',
            qElemNumber: 4705,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.531',
            qNum: 0.531,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Girvan',
            qNum: 'NaN',
            qElemNumber: 1110,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.531',
            qNum: 0.531,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'No Ordinary',
            qNum: 'NaN',
            qElemNumber: 5693,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.531',
            qNum: 0.531,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Springbank 11 years  Local Barley',
            qNum: 'NaN',
            qElemNumber: 11310,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.531',
            qNum: 0.531,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Miltonduff',
            qNum: 'NaN',
            qElemNumber: 352,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.53011111',
            qNum: 0.5301111111111111,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Kincardine',
            qNum: 'NaN',
            qElemNumber: 4627,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.529',
            qNum: 0.529,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Pulteney',
            qNum: 'NaN',
            qElemNumber: 5572,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.52875',
            qNum: 0.5287499999999999,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Lp7',
            qNum: 'NaN',
            qElemNumber: 4033,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.528',
            qNum: 0.528,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glentauchers',
            qNum: 'NaN',
            qElemNumber: 113,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.52708333',
            qNum: 0.5270833333333333,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Society Single Cask No 5.51',
            qNum: 'NaN',
            qElemNumber: 4179,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.527',
            qNum: 0.527,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Inchgower',
            qNum: 'NaN',
            qElemNumber: 110,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5255',
            qNum: 0.5255,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Spirit of Dublin',
            qNum: 'NaN',
            qElemNumber: 4737,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.525',
            qNum: 0.525,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Paul John',
            qNum: 'NaN',
            qElemNumber: 3333,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.52485714',
            qNum: 0.5248571428571428,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Auld Rare',
            qNum: 'NaN',
            qElemNumber: 4289,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.524',
            qNum: 0.524,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements of Islay Lp5',
            qNum: 'NaN',
            qElemNumber: 9914,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.524',
            qNum: 0.524,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ardbeg',
            qNum: 'NaN',
            qElemNumber: 5974,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.52333333',
            qNum: 0.5233333333333333,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Berrys\' Speyburn',
            qNum: 'NaN',
            qElemNumber: 1434,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.523',
            qNum: 0.523,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Balvenie TUN 1509 Batch 3',
            qNum: 'NaN',
            qElemNumber: 2205,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.522',
            qNum: 0.522,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Kintra',
            qNum: 'NaN',
            qElemNumber: 12047,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.522',
            qNum: 0.522,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Port Dundas',
            qNum: 'NaN',
            qElemNumber: 946,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.522',
            qNum: 0.522,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Society Single Cask No 44.73',
            qNum: 'NaN',
            qElemNumber: 4177,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.522',
            qNum: 0.522,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Keith',
            qNum: 'NaN',
            qElemNumber: 63,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.52',
            qNum: 0.5200000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hazelburn',
            qNum: 'NaN',
            qElemNumber: 4603,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5195',
            qNum: 0.5195,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Society Single Cask No.29.185',
            qNum: 'NaN',
            qElemNumber: 2466,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.519',
            qNum: 0.519,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Dark Secret',
            qNum: 'NaN',
            qElemNumber: 1772,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.518',
            qNum: 0.518,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ben Nevis',
            qNum: 'NaN',
            qElemNumber: 115,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.51771429',
            qNum: 0.5177142857142859,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Elgin',
            qNum: 'NaN',
            qElemNumber: 4317,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5175',
            qNum: 0.5175000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Amrut',
            qNum: 'NaN',
            qElemNumber: 2407,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.516',
            qNum: 0.516,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Cl9',
            qNum: 'NaN',
            qElemNumber: 12116,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.516',
            qNum: 0.516,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements of Islay Bw3',
            qNum: 'NaN',
            qElemNumber: 8976,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.516',
            qNum: 0.516,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Islay Malt',
            qNum: 'NaN',
            qElemNumber: 2942,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.516',
            qNum: 0.516,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Springbank',
            qNum: 'NaN',
            qElemNumber: 676,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.51577778',
            qNum: 0.5157777777777778,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Fighting Cock',
            qNum: 'NaN',
            qElemNumber: 10,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.515',
            qNum: 0.515,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Clynelish',
            qNum: 'NaN',
            qElemNumber: 78,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.51464286',
            qNum: 0.5146428571428571,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements of Islay Br6',
            qNum: 'NaN',
            qElemNumber: 11131,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.514',
            qNum: 0.514,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Chapter 7',
            qNum: 'NaN',
            qElemNumber: 119,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5135',
            qNum: 0.5135000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Tamdhu',
            qNum: 'NaN',
            qElemNumber: 59,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.51333333',
            qNum: 0.5133333333333333,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Box 2nd Step Collection 03',
            qNum: 'NaN',
            qElemNumber: 5092,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.513',
            qNum: 0.513,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements of Islay Lp6',
            qNum: 'NaN',
            qElemNumber: 11128,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.513',
            qNum: 0.513,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Allt-a-Bhainne',
            qNum: 'NaN',
            qElemNumber: 1402,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.512',
            qNum: 0.512,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Great 1890\'s',
            qNum: 'NaN',
            qElemNumber: 2810,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.512',
            qNum: 0.512,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Craigellachie',
            qNum: 'NaN',
            qElemNumber: 58,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.51105556',
            qNum: 0.5110555555555556,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Box 2nd Step #1',
            qNum: 'NaN',
            qElemNumber: 1330,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.511',
            qNum: 0.511,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Kilkerran',
            qNum: 'NaN',
            qElemNumber: 3174,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.511',
            qNum: 0.511,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenlossie',
            qNum: 'NaN',
            qElemNumber: 1770,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5105',
            qNum: 0.5105,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Benriach 29 Years',
            qNum: 'NaN',
            qElemNumber: 11469,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.51',
            qNum: 0.51,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Carsebridge',
            qNum: 'NaN',
            qElemNumber: 948,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.51',
            qNum: 0.51,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Jura Tastival',
            qNum: 'NaN',
            qElemNumber: 2956,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.51',
            qNum: 0.51,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Scotch Malt Whisky Society',
            qNum: 'NaN',
            qElemNumber: 3075,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.51',
            qNum: 0.51,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Inchmurrin',
            qNum: 'NaN',
            qElemNumber: 7491,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.509',
            qNum: 0.509,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Box',
            qNum: 'NaN',
            qElemNumber: 4292,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.508',
            qNum: 0.508,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Teaninich',
            qNum: 'NaN',
            qElemNumber: 2498,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.508',
            qNum: 0.508,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Benrinnes',
            qNum: 'NaN',
            qElemNumber: 62,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5079',
            qNum: 0.5079,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenburgie',
            qNum: 'NaN',
            qElemNumber: 406,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5075',
            qNum: 0.5075000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ole Smoky',
            qNum: 'NaN',
            qElemNumber: 4105,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5075',
            qNum: 0.5075000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Timorous Beastie',
            qNum: 'NaN',
            qElemNumber: 4347,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5075',
            qNum: 0.5075000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenrothes',
            qNum: 'NaN',
            qElemNumber: 118,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.50582609',
            qNum: 0.505826086956522,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Old Ezra',
            qNum: 'NaN',
            qElemNumber: 1131,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.505',
            qNum: 0.505,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Sansibar',
            qNum: 'NaN',
            qElemNumber: 336,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.50455556',
            qNum: 0.5045555555555555,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Caperdonich',
            qNum: 'NaN',
            qElemNumber: 2490,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5045',
            qNum: 0.5045,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Braes of Glenlivet',
            qNum: 'NaN',
            qElemNumber: 120,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.50366667',
            qNum: 0.5036666666666667,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Linkwood',
            qNum: 'NaN',
            qElemNumber: 61,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.503',
            qNum: 0.503,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Caol Ila',
            qNum: 'NaN',
            qElemNumber: 1334,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.50268182',
            qNum: 0.5026818181818181,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Cragganmore',
            qNum: 'NaN',
            qElemNumber: 2494,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.50225',
            qNum: 0.50225,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Caledonian',
            qNum: 'NaN',
            qElemNumber: 945,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.502',
            qNum: 0.502,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Elements of Islay Bw5',
            qNum: 'NaN',
            qElemNumber: 11127,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.502',
            qNum: 0.502,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Deanston',
            qNum: 'NaN',
            qElemNumber: 1482,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.50172727',
            qNum: 0.5017272727272727,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Maltman',
            qNum: 'NaN',
            qElemNumber: 2268,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.50166667',
            qNum: 0.5016666666666667,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenkinchie',
            qNum: 'NaN',
            qElemNumber: 2555,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.501',
            qNum: 0.501,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Isle of Lime',
            qNum: 'NaN',
            qElemNumber: 12174,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.501',
            qNum: 0.501,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hart Brothers',
            qNum: 'NaN',
            qElemNumber: 4502,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.50011111',
            qNum: 0.5001111111111112,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Benriach',
            qNum: 'NaN',
            qElemNumber: 337,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bruichladdich Port Charlotte Scottish',
            qNum: 'NaN',
            qElemNumber: 9437,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bruichladdich Scottish Barley',
            qNum: 'NaN',
            qElemNumber: 9432,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'E.H Taylor',
            qNum: 'NaN',
            qElemNumber: 12339,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenrothes Speyside',
            qNum: 'NaN',
            qElemNumber: 12278,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Isle of Arran',
            qNum: 'NaN',
            qElemNumber: 2769,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'James E. Pepper 1776',
            qNum: 'NaN',
            qElemNumber: 10299,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'James E. Pepper 1776 Bourbon',
            qNum: 'NaN',
            qElemNumber: 9592,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'James E. Pepper 1776 Rye',
            qNum: 'NaN',
            qElemNumber: 9593,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Knob Creek',
            qNum: 'NaN',
            qElemNumber: 8914,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Millstone Rye 100',
            qNum: 'NaN',
            qElemNumber: 7681,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Old Ballantruan',
            qNum: 'NaN',
            qElemNumber: 7185,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Rittenhouse Straight Rye',
            qNum: 'NaN',
            qElemNumber: 8757,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Single Cask Exclusives',
            qNum: 'NaN',
            qElemNumber: 12254,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Single Cask Exclusives Collection',
            qNum: 'NaN',
            qElemNumber: 12253,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Society Single Cask No 31.33',
            qNum: 'NaN',
            qElemNumber: 2336,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Speyside\'s Finest',
            qNum: 'NaN',
            qElemNumber: 9691,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Creative Whisky Company',
            qNum: 'NaN',
            qElemNumber: 4573,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Tomatin Cù Bòcan',
            qNum: 'NaN',
            qElemNumber: 4799,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.5',
            qNum: 0.5,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Dailuaine',
            qNum: 'NaN',
            qElemNumber: 83,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.49992857',
            qNum: 0.4999285714285714,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Scotia',
            qNum: 'NaN',
            qElemNumber: 1044,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.49992308',
            qNum: 0.4999230769230769,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Strathmill',
            qNum: 'NaN',
            qElemNumber: 335,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.49983333',
            qNum: 0.49983333333333335,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Aultmore',
            qNum: 'NaN',
            qElemNumber: 2500,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4995',
            qNum: 0.4995,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Jack Ryan',
            qNum: 'NaN',
            qElemNumber: 859,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.49833333',
            qNum: 0.49833333333333335,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Balvenie',
            qNum: 'NaN',
            qElemNumber: 11460,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4975',
            qNum: 0.4975,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Garioch',
            qNum: 'NaN',
            qElemNumber: 111,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4975',
            qNum: 0.4975,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Auld Rare Benriach',
            qNum: 'NaN',
            qElemNumber: 1173,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.495',
            qNum: 0.495,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Smooth Ambler',
            qNum: 'NaN',
            qElemNumber: 10346,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.495',
            qNum: 0.495,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Arran',
            qNum: 'NaN',
            qElemNumber: 117,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.49411111',
            qNum: 0.4941111111111111,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Br2',
            qNum: 'NaN',
            qElemNumber: 7585,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.493',
            qNum: 0.493,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Spey',
            qNum: 'NaN',
            qElemNumber: 350,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.492875',
            qNum: 0.492875,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Grainman',
            qNum: 'NaN',
            qElemNumber: 2271,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4924',
            qNum: 0.49240000000000006,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Gold Cock Whisky',
            qNum: 'NaN',
            qElemNumber: 2436,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.492',
            qNum: 0.49200000000000005,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Rudolf Jelinek',
            qNum: 'NaN',
            qElemNumber: 3527,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.492',
            qNum: 0.49200000000000005,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Glover',
            qNum: 'NaN',
            qElemNumber: 12302,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.492',
            qNum: 0.49200000000000005,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Douglas Laing',
            qNum: 'NaN',
            qElemNumber: 4318,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.49133333',
            qNum: 0.49133333333333334,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ardmore',
            qNum: 'NaN',
            qElemNumber: 641,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4908',
            qNum: 0.49079999999999996,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bladnoch',
            qNum: 'NaN',
            qElemNumber: 3589,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.48966667',
            qNum: 0.48966666666666664,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glendronach',
            qNum: 'NaN',
            qElemNumber: 939,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.48955556',
            qNum: 0.4895555555555555,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Speyside',
            qNum: 'NaN',
            qElemNumber: 60,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4894',
            qNum: 0.4894,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Invergordon',
            qNum: 'NaN',
            qElemNumber: 638,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.489375',
            qNum: 0.48937499999999995,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Laphroaig',
            qNum: 'NaN',
            qElemNumber: 1190,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.48926316',
            qNum: 0.489263157894737,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ailsa Bay',
            qNum: 'NaN',
            qElemNumber: 12437,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.489',
            qNum: 0.489,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Kilchoman',
            qNum: 'NaN',
            qElemNumber: 2544,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.487',
            qNum: 0.487,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'GlenDronach Recherché Cask No 5',
            qNum: 'NaN',
            qElemNumber: 10275,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.486',
            qNum: 0.486,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Braeval',
            qNum: 'NaN',
            qElemNumber: 4691,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.484',
            qNum: 0.484,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Legendary',
            qNum: 'NaN',
            qElemNumber: 10703,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.484',
            qNum: 0.484,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Tomintoul',
            qNum: 'NaN',
            qElemNumber: 274,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4836',
            qNum: 0.48360000000000003,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Early Days Collection',
            qNum: 'NaN',
            qElemNumber: 1290,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4835',
            qNum: 0.4835,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Brora',
            qNum: 'NaN',
            qElemNumber: 1332,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.48333333',
            qNum: 0.48333333333333334,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Maltbarn',
            qNum: 'NaN',
            qElemNumber: 4786,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.483',
            qNum: 0.483,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Speyside Region',
            qNum: 'NaN',
            qElemNumber: 7577,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.482',
            qNum: 0.48200000000000004,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glengoyne',
            qNum: 'NaN',
            qElemNumber: 5891,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.48033333',
            qNum: 0.4803333333333334,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Spice King',
            qNum: 'NaN',
            qElemNumber: 4841,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.48',
            qNum: 0.48000000000000004,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glendronach Parliament',
            qNum: 'NaN',
            qElemNumber: 7204,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.48',
            qNum: 0.48,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Lagavulin 8 year',
            qNum: 'NaN',
            qElemNumber: 11212,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.48',
            qNum: 0.48,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Langs',
            qNum: 'NaN',
            qElemNumber: 10727,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.48',
            qNum: 0.48,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Port Askaig',
            qNum: 'NaN',
            qElemNumber: 950,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4798',
            qNum: 0.4798,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Auchentoshan',
            qNum: 'NaN',
            qElemNumber: 81,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.47964286',
            qNum: 0.47964285714285715,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Balvenie Single Barrel',
            qNum: 'NaN',
            qElemNumber: 4602,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.478',
            qNum: 0.478,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Tullibardine',
            qNum: 'NaN',
            qElemNumber: 1834,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.47715385',
            qNum: 0.4771538461538461,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bunnahabhain',
            qNum: 'NaN',
            qElemNumber: 657,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.476',
            qNum: 0.47600000000000003,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenlivet',
            qNum: 'NaN',
            qElemNumber: 2510,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.476',
            qNum: 0.476,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Longmorn',
            qNum: 'NaN',
            qElemNumber: 262,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.475',
            qNum: 0.47500000000000003,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Number One Drinks',
            qNum: 'NaN',
            qElemNumber: 11542,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.475',
            qNum: 0.475,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Mackinlay\'s',
            qNum: 'NaN',
            qElemNumber: 8278,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.473',
            qNum: 0.473,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Hive',
            qNum: 'NaN',
            qElemNumber: 4842,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4725',
            qNum: 0.47250000000000003,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Mackmyra',
            qNum: 'NaN',
            qElemNumber: 611,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.47184615',
            qNum: 0.4718461538461539,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Aberlour',
            qNum: 'NaN',
            qElemNumber: 6495,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4716',
            qNum: 0.4716,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bowmore',
            qNum: 'NaN',
            qElemNumber: 1842,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.47140909',
            qNum: 0.47140909090909083,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Grant',
            qNum: 'NaN',
            qElemNumber: 263,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.47',
            qNum: 0.47000000000000003,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenglassaugh',
            qNum: 'NaN',
            qElemNumber: 6866,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.47',
            qNum: 0.47,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Koval Bourbon',
            qNum: 'NaN',
            qElemNumber: 10180,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.47',
            qNum: 0.47,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Koval Four Grain',
            qNum: 'NaN',
            qElemNumber: 10181,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.47',
            qNum: 0.47,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Maker\'s 46',
            qNum: 'NaN',
            qElemNumber: 4090,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.47',
            qNum: 0.47,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Moray',
            qNum: 'NaN',
            qElemNumber: 674,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4698125',
            qNum: 0.4698125,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Tomatin',
            qNum: 'NaN',
            qElemNumber: 466,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4698',
            qNum: 0.46980000000000005,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Wemyss Malts',
            qNum: 'NaN',
            qElemNumber: 272,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46933333',
            qNum: 0.4693333333333334,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Old Pulteney',
            qNum: 'NaN',
            qElemNumber: 2309,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46714286',
            qNum: 0.46714285714285714,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Braunstein 12:1',
            qNum: 'NaN',
            qElemNumber: 7837,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.467',
            qNum: 0.467,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Roughstock',
            qNum: 'NaN',
            qElemNumber: 9812,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46666667',
            qNum: 0.4666666666666666,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Few Bourbon',
            qNum: 'NaN',
            qElemNumber: 2538,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.465',
            qNum: 0.465,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Few Spirits',
            qNum: 'NaN',
            qElemNumber: 4045,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.465',
            qNum: 0.465,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Few Spirits Rye',
            qNum: 'NaN',
            qElemNumber: 4046,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.465',
            qNum: 0.465,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Imperial',
            qNum: 'NaN',
            qElemNumber: 1911,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4645',
            qNum: 0.4645,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Teeling',
            qNum: 'NaN',
            qElemNumber: 1653,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46425',
            qNum: 0.46425,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Highland Park',
            qNum: 'NaN',
            qElemNumber: 1559,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4636875',
            qNum: 0.46368750000000003,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bunnahabhain Mòine',
            qNum: 'NaN',
            qElemNumber: 10730,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.463',
            qNum: 0.46299999999999997,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Kyrö',
            qNum: 'NaN',
            qElemNumber: 10576,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.463',
            qNum: 0.46299999999999997,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Highland Journey',
            qNum: 'NaN',
            qElemNumber: 10219,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.462',
            qNum: 0.462,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Epicurean',
            qNum: 'NaN',
            qElemNumber: 3496,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.462',
            qNum: 0.462,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Mackmyra Svensk Rök',
            qNum: 'NaN',
            qElemNumber: 8314,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.461',
            qNum: 0.461,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Benromach',
            qNum: 'NaN',
            qElemNumber: 6619,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.4600000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Allt A\'Bhainne',
            qNum: 'NaN',
            qElemNumber: 11829,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'anCnoc 24 years',
            qNum: 'NaN',
            qElemNumber: 2219,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'anCnoc Stack',
            qNum: 'NaN',
            qElemNumber: 2431,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Armorik',
            qNum: 'NaN',
            qElemNumber: 916,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Armorik Classic',
            qNum: 'NaN',
            qElemNumber: 11123,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Armorik Double Maturation',
            qNum: 'NaN',
            qElemNumber: 11126,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Arran Single Malt',
            qNum: 'NaN',
            qElemNumber: 7043,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Auchnagie',
            qNum: 'NaN',
            qElemNumber: 8804,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Balblair',
            qNum: 'NaN',
            qElemNumber: 2223,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bank Note',
            qNum: 'NaN',
            qElemNumber: 9695,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'BenRiach 17 Years',
            qNum: 'NaN',
            qElemNumber: 11461,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'BenRiach 21 Years',
            qNum: 'NaN',
            qElemNumber: 11467,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Berrys\' Islay Reserve',
            qNum: 'NaN',
            qElemNumber: 7197,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Berrys\' Speyside',
            qNum: 'NaN',
            qElemNumber: 3499,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Big Peat',
            qNum: 'NaN',
            qElemNumber: 6500,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Box Dálvve',
            qNum: 'NaN',
            qElemNumber: 3885,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Braunstein 10:3',
            qNum: 'NaN',
            qElemNumber: 6889,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bunnahbhain',
            qNum: 'NaN',
            qElemNumber: 3304,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Cadenhead Creations',
            qNum: 'NaN',
            qElemNumber: 8647,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Campeltown Malts',
            qNum: 'NaN',
            qElemNumber: 7637,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Cask Islay',
            qNum: 'NaN',
            qElemNumber: 10104,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Celtique Connexion Sauternes',
            qNum: 'NaN',
            qElemNumber: 11210,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Chapter 6',
            qNum: 'NaN',
            qElemNumber: 10517,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Chapter 11',
            qNum: 'NaN',
            qElemNumber: 10518,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Chapter 14',
            qNum: 'NaN',
            qElemNumber: 10520,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Chapter 15 Peated',
            qNum: 'NaN',
            qElemNumber: 10521,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Clan Denny',
            qNum: 'NaN',
            qElemNumber: 9696,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Colorado Straight Bourbon',
            qNum: 'NaN',
            qElemNumber: 8319,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Compass Box The Lost blend',
            qNum: 'NaN',
            qElemNumber: 10355,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Craigallachie',
            qNum: 'NaN',
            qElemNumber: 10526,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Craoi Na Móna',
            qNum: 'NaN',
            qElemNumber: 3294,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Double Barrel',
            qNum: 'NaN',
            qElemNumber: 1171,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Douglas Laing\'s',
            qNum: 'NaN',
            qElemNumber: 11108,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glencadam',
            qNum: 'NaN',
            qElemNumber: 7848,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glengarioch',
            qNum: 'NaN',
            qElemNumber: 11631,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenlochy',
            qNum: 'NaN',
            qElemNumber: 8300,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenmorangie Bacalta',
            qNum: 'NaN',
            qElemNumber: 4393,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hammer Village',
            qNum: 'NaN',
            qElemNumber: 2267,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hart brothers',
            qNum: 'NaN',
            qElemNumber: 4671,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hepburn\'s Choice',
            qNum: 'NaN',
            qElemNumber: 1596,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hibernia',
            qNum: 'NaN',
            qElemNumber: 11141,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Highland Park Ambassador\'s Choice',
            qNum: 'NaN',
            qElemNumber: 8320,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hudson',
            qNum: 'NaN',
            qElemNumber: 8761,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hyde No 2',
            qNum: 'NaN',
            qElemNumber: 1989,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hyde No 3',
            qNum: 'NaN',
            qElemNumber: 1991,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Islay Blended Malt',
            qNum: 'NaN',
            qElemNumber: 6933,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Jura Elixir',
            qNum: 'NaN',
            qElemNumber: 7926,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Jura Prophecy',
            qNum: 'NaN',
            qElemNumber: 9951,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Lemon Grove',
            qNum: 'NaN',
            qElemNumber: 7359,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Longrow',
            qNum: 'NaN',
            qElemNumber: 11309,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Machrie Moor',
            qNum: 'NaN',
            qElemNumber: 4545,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'McDonalds',
            qNum: 'NaN',
            qElemNumber: 4716,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Millstone Sherry Oak',
            qNum: 'NaN',
            qElemNumber: 7686,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Morlach',
            qNum: 'NaN',
            qElemNumber: 11884,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Mosstowie',
            qNum: 'NaN',
            qElemNumber: 8299,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Omar',
            qNum: 'NaN',
            qElemNumber: 3525,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Really Big Peat',
            qNum: 'NaN',
            qElemNumber: 70,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Redemption',
            qNum: 'NaN',
            qElemNumber: 10297,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Royal Brackla',
            qNum: 'NaN',
            qElemNumber: 11628,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Stratheden',
            qNum: 'NaN',
            qElemNumber: 8805,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Sweet Wee Scallywag',
            qNum: 'NaN',
            qElemNumber: 8881,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Big Strand',
            qNum: 'NaN',
            qElemNumber: 11630,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'William Cadenhead',
            qNum: 'NaN',
            qElemNumber: 1813,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Zuidam',
            qNum: 'NaN',
            qElemNumber: 1201,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Zuidam Distillers',
            qNum: 'NaN',
            qElemNumber: 12320,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.46',
            qNum: 0.46,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Talisker',
            qNum: 'NaN',
            qElemNumber: 2433,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4584',
            qNum: 0.45840000000000003,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Talisker Skye',
            qNum: 'NaN',
            qElemNumber: 4338,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.458',
            qNum: 0.45799999999999996,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Kavalan',
            qNum: 'NaN',
            qElemNumber: 634,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45775',
            qNum: 0.4577500000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Michters',
            qNum: 'NaN',
            qElemNumber: 10859,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.457',
            qNum: 0.457,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Peat Chimney',
            qNum: 'NaN',
            qElemNumber: 4840,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45666667',
            qNum: 0.4566666666666667,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Glenlivet',
            qNum: 'NaN',
            qElemNumber: 1474,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45646667',
            qNum: 0.4564666666666667,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Blue Hanger',
            qNum: 'NaN',
            qElemNumber: 6967,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.456',
            qNum: 0.456,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Akashi',
            qNum: 'NaN',
            qElemNumber: 7133,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.455',
            qNum: 0.455,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Wild Turkey',
            qNum: 'NaN',
            qElemNumber: 7467,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.455',
            qNum: 0.455,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'BenRiach',
            qNum: 'NaN',
            qElemNumber: 6542,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45342857',
            qNum: 0.45342857142857146,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Braunstein',
            qNum: 'NaN',
            qElemNumber: 562,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45333333',
            qNum: 0.45333333333333337,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Rebel',
            qNum: 'NaN',
            qElemNumber: 7688,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.453',
            qNum: 0.45299999999999996,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenfarclas',
            qNum: 'NaN',
            qElemNumber: 5326,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45125',
            qNum: 0.45125000000000004,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Benromach Hermitage',
            qNum: 'NaN',
            qElemNumber: 334,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45',
            qNum: 0.45,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bulleit Bourbon',
            qNum: 'NaN',
            qElemNumber: 9117,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45',
            qNum: 0.45,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bulleit Rye',
            qNum: 'NaN',
            qElemNumber: 9264,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45',
            qNum: 0.45,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Chicken Cock',
            qNum: 'NaN',
            qElemNumber: 1664,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45',
            qNum: 0.45,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Four Roses',
            qNum: 'NaN',
            qElemNumber: 6420,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45',
            qNum: 0.45,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'George Dickel No12',
            qNum: 'NaN',
            qElemNumber: 8358,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45',
            qNum: 0.45,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Joce City Moonshine',
            qNum: 'NaN',
            qElemNumber: 2816,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45',
            qNum: 0.45,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Maker\'s Mark',
            qNum: 'NaN',
            qElemNumber: 5892,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45',
            qNum: 0.45,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Millstone',
            qNum: 'NaN',
            qElemNumber: 7677,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45',
            qNum: 0.45,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Rebel Yell Rye',
            qNum: 'NaN',
            qElemNumber: 2553,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45',
            qNum: 0.45,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Samaroli\'s Peaty',
            qNum: 'NaN',
            qElemNumber: 9827,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45',
            qNum: 0.45,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Tullamore Dew',
            qNum: 'NaN',
            qElemNumber: 5307,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.45',
            qNum: 0.45,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Classic Malts',
            qNum: 'NaN',
            qElemNumber: 6019,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.449',
            qNum: 0.449,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Balvenie',
            qNum: 'NaN',
            qElemNumber: 1396,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.44888889',
            qNum: 0.4488888888888889,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Macallan',
            qNum: 'NaN',
            qElemNumber: 273,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4482',
            qNum: 0.44820000000000004,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Mortlach',
            qNum: 'NaN',
            qElemNumber: 2497,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.448',
            qNum: 0.44799999999999995,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glendalough',
            qNum: 'NaN',
            qElemNumber: 3183,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.44666667',
            qNum: 0.4466666666666667,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hellyers Road',
            qNum: 'NaN',
            qElemNumber: 8707,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4465',
            qNum: 0.44650000000000006,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Loch Lomond',
            qNum: 'NaN',
            qElemNumber: 5108,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.445',
            qNum: 0.445,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Smokehead',
            qNum: 'NaN',
            qElemNumber: 5687,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.445',
            qNum: 0.445,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The English',
            qNum: 'NaN',
            qElemNumber: 12509,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.445',
            qNum: 0.445,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenmorangie',
            qNum: 'NaN',
            qElemNumber: 4863,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4425',
            qNum: 0.44250000000000006,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Lagavulin',
            qNum: 'NaN',
            qElemNumber: 2429,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4425',
            qNum: 0.4425,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Woodford Reserve',
            qNum: 'NaN',
            qElemNumber: 4870,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.442',
            qNum: 0.44200000000000006,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Nikka',
            qNum: 'NaN',
            qElemNumber: 2617,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.44175',
            qNum: 0.4417500000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'anCnoc',
            qNum: 'NaN',
            qElemNumber: 188,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4405',
            qNum: 0.4405,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Corner Creek',
            qNum: 'NaN',
            qElemNumber: 1170,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.44',
            qNum: 0.44,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Highland Harvest',
            qNum: 'NaN',
            qElemNumber: 2844,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.44',
            qNum: 0.44,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Samaroli',
            qNum: 'NaN',
            qElemNumber: 7851,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.44',
            qNum: 0.44,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Strathisla',
            qNum: 'NaN',
            qElemNumber: 5197,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4396',
            qNum: 0.4396000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Spirit of Hven',
            qNum: 'NaN',
            qElemNumber: 3655,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43933333',
            qNum: 0.43933333333333335,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Compass Box',
            qNum: 'NaN',
            qElemNumber: 3438,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43818182',
            qNum: 0.43818181818181823,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Jura',
            qNum: 'NaN',
            qElemNumber: 655,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4355',
            qNum: 0.43550000000000005,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Wannborga Ö Whisky Artisan Single Malt',
            qNum: 'NaN',
            qElemNumber: 3309,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.435',
            qNum: 0.435,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Michter\'s US*1',
            qNum: 'NaN',
            qElemNumber: 3580,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43483333',
            qNum: 0.43483333333333335,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Rebel Yell',
            qNum: 'NaN',
            qElemNumber: 4043,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43433333',
            qNum: 0.4343333333333333,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Cutty Sark',
            qNum: 'NaN',
            qElemNumber: 5682,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43333333',
            qNum: 0.43333333333333335,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'North Of Scotland',
            qNum: 'NaN',
            qElemNumber: 3140,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.433',
            qNum: 0.433,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Benriach 38 Years',
            qNum: 'NaN',
            qElemNumber: 11470,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.431',
            qNum: 0.431,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Edradour',
            qNum: 'NaN',
            qElemNumber: 6212,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43000000000000005,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Finlaggan',
            qNum: 'NaN',
            qElemNumber: 2520,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43000000000000005,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Redbreast',
            qNum: 'NaN',
            qElemNumber: 7367,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43000000000000005,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bristol Classic Rum',
            qNum: 'NaN',
            qElemNumber: 3910,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Caol Ila Distillers Edition',
            qNum: 'NaN',
            qElemNumber: 2426,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Compass Box Great King Street',
            qNum: 'NaN',
            qElemNumber: 10611,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Dalwhinnie',
            qNum: 'NaN',
            qElemNumber: 360,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'English',
            qNum: 'NaN',
            qElemNumber: 8867,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'English Whisky Black Range Peated',
            qNum: 'NaN',
            qElemNumber: 8313,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Evan Williams',
            qNum: 'NaN',
            qElemNumber: 2630,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Fujikai',
            qNum: 'NaN',
            qElemNumber: 12286,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Great King St',
            qNum: 'NaN',
            qElemNumber: 7231,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hirsch Canadian',
            qNum: 'NaN',
            qElemNumber: 2701,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Michter\'s US Nr1',
            qNum: 'NaN',
            qElemNumber: 11049,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Millstone American Oak',
            qNum: 'NaN',
            qElemNumber: 7678,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Nikka Pure Malt Black',
            qNum: 'NaN',
            qElemNumber: 2829,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Nikka Pure Malt Red',
            qNum: 'NaN',
            qElemNumber: 2807,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Oban',
            qNum: 'NaN',
            qElemNumber: 1446,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Old Pepper',
            qNum: 'NaN',
            qElemNumber: 1320,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Slyrs',
            qNum: 'NaN',
            qElemNumber: 8971,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Smith´s Glenlivet',
            qNum: 'NaN',
            qElemNumber: 11680,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Speyburn',
            qNum: 'NaN',
            qElemNumber: 5827,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Speymalt',
            qNum: 'NaN',
            qElemNumber: 12081,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Storm',
            qNum: 'NaN',
            qElemNumber: 2185,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Stronachie',
            qNum: 'NaN',
            qElemNumber: 10105,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Teerenpeli',
            qNum: 'NaN',
            qElemNumber: 1684,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Teerenpeli Kaski',
            qNum: 'NaN',
            qElemNumber: 11321,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Texas Longhorn',
            qNum: 'NaN',
            qElemNumber: 5129,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Glenrothes',
            qNum: 'NaN',
            qElemNumber: 7346,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Macallan No 6',
            qNum: 'NaN',
            qElemNumber: 10506,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Red Ensign',
            qNum: 'NaN',
            qElemNumber: 8725,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Tullibardine 225',
            qNum: 'NaN',
            qElemNumber: 8362,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Tullibardine 228',
            qNum: 'NaN',
            qElemNumber: 8363,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Tullibardine 500',
            qNum: 'NaN',
            qElemNumber: 12586,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Usquaebach',
            qNum: 'NaN',
            qElemNumber: 5344,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.43',
            qNum: 0.43,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Classic Malts Gift Pack',
            qNum: 'NaN',
            qElemNumber: 7084,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.429',
            qNum: 0.429,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ladyburn',
            qNum: 'NaN',
            qElemNumber: 8879,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.428',
            qNum: 0.428,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Kininvie',
            qNum: 'NaN',
            qElemNumber: 12441,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.426',
            qNum: 0.426,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Michter\'s US nr1',
            qNum: 'NaN',
            qElemNumber: 10856,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.424',
            qNum: 0.424,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Dalmore',
            qNum: 'NaN',
            qElemNumber: 7097,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.42333333',
            qNum: 0.42333333333333334,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Macallan',
            qNum: 'NaN',
            qElemNumber: 911,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.42183333',
            qNum: 0.42183333333333334,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Dalmore',
            qNum: 'NaN',
            qElemNumber: 464,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.42',
            qNum: 0.4200000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Breizh',
            qNum: 'NaN',
            qElemNumber: 11124,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.42',
            qNum: 0.42,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Girvan Single Grain',
            qNum: 'NaN',
            qElemNumber: 601,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.42',
            qNum: 0.42,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Guillon',
            qNum: 'NaN',
            qElemNumber: 10389,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.42',
            qNum: 0.42,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Jura Island',
            qNum: 'NaN',
            qElemNumber: 2137,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.42',
            qNum: 0.42,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Stetson',
            qNum: 'NaN',
            qElemNumber: 8935,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.42',
            qNum: 0.42,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Ten',
            qNum: 'NaN',
            qElemNumber: 7235,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.41864706',
            qNum: 0.4186470588235293,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenfiddich',
            qNum: 'NaN',
            qElemNumber: 608,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.41841667',
            qNum: 0.4184166666666666,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Jack Daniel\'s',
            qNum: 'NaN',
            qElemNumber: 3543,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.41571429',
            qNum: 0.41571428571428565,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Nomad Outland',
            qNum: 'NaN',
            qElemNumber: 10630,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.413',
            qNum: 0.413,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Jim Beam',
            qNum: 'NaN',
            qElemNumber: 5843,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.41285714',
            qNum: 0.41285714285714287,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Aberfeldy',
            qNum: 'NaN',
            qElemNumber: 6272,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.412',
            qNum: 0.41200000000000003,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Jefferson',
            qNum: 'NaN',
            qElemNumber: 12340,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.412',
            qNum: 0.41200000000000003,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Togouchi',
            qNum: 'NaN',
            qElemNumber: 8498,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.41133333',
            qNum: 0.41133333333333333,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ballantine\'s',
            qNum: 'NaN',
            qElemNumber: 5903,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.41',
            qNum: 0.41,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Irishman',
            qNum: 'NaN',
            qElemNumber: 8730,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.41',
            qNum: 0.41,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Johnnie Walker',
            qNum: 'NaN',
            qElemNumber: 5839,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.40755556',
            qNum: 0.4075555555555555,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hammer Head',
            qNum: 'NaN',
            qElemNumber: 1417,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.407',
            qNum: 0.40700000000000003,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Lauder\'s',
            qNum: 'NaN',
            qElemNumber: 6153,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.40666667',
            qNum: 0.4066666666666667,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Famous Grouse',
            qNum: 'NaN',
            qElemNumber: 3588,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.40636364',
            qNum: 0.4063636363636364,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Banff',
            qNum: 'NaN',
            qElemNumber: 3883,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.406',
            qNum: 0.406,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'King Robert II',
            qNum: 'NaN',
            qElemNumber: 6113,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4000000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Lord Calvert',
            qNum: 'NaN',
            qElemNumber: 9534,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4000000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Singleton',
            qNum: 'NaN',
            qElemNumber: 9659,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4000000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Stewart\'s',
            qNum: 'NaN',
            qElemNumber: 6283,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4000000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'The Talisman',
            qNum: 'NaN',
            qElemNumber: 5779,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4000000000000001,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: '2 Gingers',
            qNum: 'NaN',
            qElemNumber: 8756,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Anchor',
            qNum: 'NaN',
            qElemNumber: 1862,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bell\'s',
            qNum: 'NaN',
            qElemNumber: 2820,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ben Nevis De Luxe',
            qNum: 'NaN',
            qElemNumber: 1179,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Ben Nevis Supreme Selection',
            qNum: 'NaN',
            qElemNumber: 8928,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Black Bottle',
            qNum: 'NaN',
            qElemNumber: 9172,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Black Bush',
            qNum: 'NaN',
            qElemNumber: 6044,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Black Norse',
            qNum: 'NaN',
            qElemNumber: 9895,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Black Rock',
            qNum: 'NaN',
            qElemNumber: 5249,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Black Velvet',
            qNum: 'NaN',
            qElemNumber: 677,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Black Velvet Onyx',
            qNum: 'NaN',
            qElemNumber: 4022,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Buffalo Trace',
            qNum: 'NaN',
            qElemNumber: 7904,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bushmills',
            qNum: 'NaN',
            qElemNumber: 7022,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Bushmills Malt',
            qNum: 'NaN',
            qElemNumber: 3585,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Canadian Club',
            qNum: 'NaN',
            qElemNumber: 5913,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Cardhu',
            qNum: 'NaN',
            qElemNumber: 2578,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Chivas Regal',
            qNum: 'NaN',
            qElemNumber: 5797,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Clan MacGregor',
            qNum: 'NaN',
            qElemNumber: 5515,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Clontarf',
            qNum: 'NaN',
            qElemNumber: 5439,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Cluny',
            qNum: 'NaN',
            qElemNumber: 5255,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Connemara',
            qNum: 'NaN',
            qElemNumber: 5942,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Dewar\'s',
            qNum: 'NaN',
            qElemNumber: 12452,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Engelbrekt',
            qNum: 'NaN',
            qElemNumber: 6876,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Four Roses Bourbon',
            qNum: 'NaN',
            qElemNumber: 9142,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Gentleman Jack',
            qNum: 'NaN',
            qElemNumber: 6813,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Alpin',
            qNum: 'NaN',
            qElemNumber: 9012,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glen Grant Single Malt',
            qNum: 'NaN',
            qElemNumber: 11588,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenburgie Giftbox',
            qNum: 'NaN',
            qElemNumber: 12446,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Glenfiddich Original',
            qNum: 'NaN',
            qElemNumber: 600,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Gutevin',
            qNum: 'NaN',
            qElemNumber: 1995,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Hälge',
            qNum: 'NaN',
            qElemNumber: 7026,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'High Commissioner',
            qNum: 'NaN',
            qElemNumber: 2264,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Highland Queen 1561',
            qNum: 'NaN',
            qElemNumber: 12022,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Highland Queen Majesty',
            qNum: 'NaN',
            qElemNumber: 12023,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Huntyard Whisky',
            qNum: 'NaN',
            qElemNumber: 1436,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Islay Mist de Luxe',
            qNum: 'NaN',
            qElemNumber: 5558,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'Isle of Jura',
            qNum: 'NaN',
            qElemNumber: 5864,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'J&B',
            qNum: 'NaN',
            qElemNumber: 6138,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'John Lee',
            qNum: 'NaN',
            qElemNumber: 10731,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ],
        [
          {
            qText: 'Whisky',
            qNum: 'NaN',
            qElemNumber: 6,
            qState: 'O'
          },
          {
            qText: 'John Medley\'s',
            qNum: 'NaN',
            qElemNumber: 9299,
            qState: 'O',
            qAttrDims: {
              qValues: [
                {
                  qText: 'Whisky',
                  qElemNo: 6
                }
              ]
            }
          },
          {
            qText: '0.4',
            qNum: 0.4,
            qElemNumber: 0,
            qState: 'L'
          }
        ]
      ]
    };

  const page2 = {
    qArea: {
      qLeft: 7, qTop: 25, qWidth: 2, qHeight: 3
    },
    qMatrix: [
      [{}, { qNum: 2, qText: 'två', qElemNumber: 1 }],
      [{}, { qNum: 6, qText: 'sex', qElemNumber: 2 }],
      [{}, { qNum: 3, qText: 'tre', qElemNumber: 3 }]
    ]
  };

  const cube = {
    qMode: 'S',
    qDimensionInfo: [{ qFallbackTitle: 'Dim1', label: 'A', qStateCounts: {} }, { qFallbackTitle: 'Dim2', label: 'B', qStateCounts: {} }],
    qMeasureInfo: [{ label: 'Meas1', qMin: 1, qMax: 2 }],
    qDataPages: [page, page2]
  };

  // const fields = [
  //   {
  //     title: () => 'Dim1', value: d => d.qElemNumber, label: d => d.qText, key: () => 'qDimensionInfo/0'
  //   },
  //   {
  //     title: () => 'Dim2', value: d => d.qElemNumber, label: d => d.qText, key: () => 'qDimensionInfo/1'
  //   },
  //   {
  //     title: () => 'Meas1', value: d => d.qValue, label: d => d.qText, key: () => 'qMeasureInfo/0'
  //   }
  // ];

  // const dataset = {
  //   raw: () => cube,
  //   key: () => 'hyper',
  //   field: sinon.stub()
  // };

  const dataset = q({
    key: 'hyper',
    data: cube
  });

  const cache = dataset._cache();

  let deps;
  beforeEach(() => {
    deps = {
      normalizeConfig: sinon.stub(),
      collect,
      track
    };
  });

  // const fieldInstances = dataset.fields();

  // dataset.field.withArgs('Dim1').returns(fields[0]);
  // dataset.field.withArgs('Dim2').returns(fields[1]);
  // dataset.field.withArgs('qMeasureInfo/0').returns(fields[2]);

  it.only('should return dim field values based on default field accessor', () => {
    const suite = new Benchmark.Suite;

    deps.normalizeConfig.returns({
      main: {
        field: dataset.field('Dim2'),
        value: dataset.field('Dim2').value,
        label: dataset.field('Dim2').label
      },
      props: {}
    });
    const m = extract({
      field: 'Dim2'
    }, dataset, cache, deps);

    // add tests
    suite.add('forEach extractor', () => {
      extract({
        field: 'Dim2'
      }, dataset, cache, deps);
    }).add('for extractor', () => {
      betterExtract({
        field: 'Dim2'
      }, dataset, cache, deps);
    }).on('cycle', (event) => {
      console.log(String(event.target));
    }).run({ 'async': true });

    console.log('field values: ', page.qMatrix.length);

    // expect(m).to.eql([
    //   { value: 1, label: 'tre', source: { field: 'qDimensionInfo/1', key: 'hyper' } },
    //   { value: 2, label: 'sju', source: { field: 'qDimensionInfo/1', key: 'hyper' } },
    //   { value: 3, label: 'ett', source: { field: 'qDimensionInfo/1', key: 'hyper' } }
    // ]);
  });

  it('should return measure field values based on default field accessor', () => {
    deps.normalizeConfig.returns({
      main: {
        field: dataset.field('qMeasureInfo/0'),
        value: dataset.field('qMeasureInfo/0').value,
        label: dataset.field('qMeasureInfo/0').label
      },
      props: {}
    });
    const m = extract({
      field: 'qMeasureInfo/0'
    }, dataset, cache, deps);
    expect(m).to.eql([
      { value: 53, label: '$53', source: { field: 'qMeasureInfo/0', key: 'hyper' } },
      { value: 57, label: '$57', source: { field: 'qMeasureInfo/0', key: 'hyper' } },
      { value: 51, label: '$51', source: { field: 'qMeasureInfo/0', key: 'hyper' } }
    ]);
  });

  it('should return joined set when array of fields is used', () => {
    deps.normalizeConfig.withArgs({ field: 'qMeasureInfo/0' }, dataset).returns({
      main: {
        field: dataset.field('qMeasureInfo/0'),
        value: dataset.field('qMeasureInfo/0').value
      },
      props: {}
    });
    deps.normalizeConfig.withArgs({ field: 'Dim2' }, dataset).returns({
      main: {
        field: dataset.field('Dim2'),
        value: dataset.field('Dim2').value
      },
      props: {}
    });
    const m = extract([{
      field: 'qMeasureInfo/0'
    }, {
      field: 'Dim2'
    }], dataset, cache, deps);
    expect(m).to.eql([
      { value: 53, label: '53', source: { field: 'qMeasureInfo/0', key: 'hyper' } },
      { value: 57, label: '57', source: { field: 'qMeasureInfo/0', key: 'hyper' } },
      { value: 51, label: '51', source: { field: 'qMeasureInfo/0', key: 'hyper' } },
      { value: 1, label: '1', source: { field: 'qDimensionInfo/1', key: 'hyper' } },
      { value: 2, label: '2', source: { field: 'qDimensionInfo/1', key: 'hyper' } },
      { value: 3, label: '3', source: { field: 'qDimensionInfo/1', key: 'hyper' } }
    ]);
  });

  it('should return raw field values', () => {
    deps.normalizeConfig.returns({
      main: {
        field: dataset.field('Dim2'),
        value: d => d,
        label: dataset.field('Dim2').label
      },
      props: {}
    });
    const m = extract({
      field: 'Dim2'
    }, dataset, cache, deps);
    expect(m).to.eql([
      {
        value: {
          qNum: 3, qText: 'tre', qElemNumber: 1, qRow: 5
        },
        label: 'tre',
        source: { field: 'qDimensionInfo/1', key: 'hyper' }
      },
      {
        value: {
          qNum: 7, qText: 'sju', qElemNumber: 2, qRow: 6
        },
        label: 'sju',
        source: { field: 'qDimensionInfo/1', key: 'hyper' }
      },
      {
        value: {
          qNum: 1, qText: 'ett', qElemNumber: 3, qRow: 7
        },
        label: 'ett',
        source: { field: 'qDimensionInfo/1', key: 'hyper' }
      }
    ]);
  });

  it('should return mapped properties from same field', () => {
    deps.normalizeConfig.returns({
      main: {
        field: dataset.field('Dim2'),
        label: dataset.field('Dim2').label,
        value: d => d
      },
      props: {
        text: {
          value: d => d.qText,
          field: dataset.field('Dim2')
        }
      }
    });
    const m = extract({
      field: 'Dim2'
    }, dataset, cache, deps);

    expect(m).to.eql([
      {
        value: {
          qNum: 3, qText: 'tre', qElemNumber: 1, qRow: 5
        },
        label: 'tre',
        source: { field: 'qDimensionInfo/1', key: 'hyper' },
        text: { value: 'tre', label: 'tre', source: { field: 'qDimensionInfo/1', key: 'hyper' } }
      },
      {
        value: {
          qNum: 7, qText: 'sju', qElemNumber: 2, qRow: 6
        },
        label: 'sju',
        source: { field: 'qDimensionInfo/1', key: 'hyper' },
        text: { value: 'sju', label: 'sju', source: { field: 'qDimensionInfo/1', key: 'hyper' } }
      },
      {
        value: {
          qNum: 1, qText: 'ett', qElemNumber: 3, qRow: 7
        },
        label: 'ett',
        source: { field: 'qDimensionInfo/1', key: 'hyper' },
        text: { value: 'ett', label: 'ett', source: { field: 'qDimensionInfo/1', key: 'hyper' } }
      }
    ]);
  });

  it('should return primitive values', () => {
    deps.normalizeConfig.returns({
      main: {
        field: dataset.field('Dim2'),
        value: 'foo'
      },
      props: {
        num: { value: 0 },
        bool: { value: false }
      }
    });
    const m = extract({
      field: 'Dim2'
    }, dataset, cache, deps);
    expect(m).to.eql([
      {
        value: 'foo',
        label: 'foo',
        source: { field: 'qDimensionInfo/1', key: 'hyper' },
        num: { value: 0, label: '0' },
        bool: { value: false, label: 'false' }
      },
      {
        value: 'foo',
        label: 'foo',
        source: { field: 'qDimensionInfo/1', key: 'hyper' },
        num: { value: 0, label: '0' },
        bool: { value: false, label: 'false' }
      },
      {
        value: 'foo',
        label: 'foo',
        source: { field: 'qDimensionInfo/1', key: 'hyper' },
        num: { value: 0, label: '0' },
        bool: { value: false, label: 'false' }
      }
    ]);
  });

  it('should return mapped properties from other fields', () => {
    deps.normalizeConfig.returns({
      main: {
        field: dataset.field('Dim2'),
        label: dataset.field('Dim2').label,
        value: v => v
      },
      props: {
        num: { value: d => d.qNum + 1, field: dataset.field('qMeasureInfo/0'), label: v => v.qText }
      }
    });
    const m = extract({
      field: 'Dim2'
    }, dataset, cache, deps);
    expect(m).to.eql([
      {
        value: {
          qNum: 3, qText: 'tre', qElemNumber: 1, qRow: 5
        },
        label: 'tre',
        source: { field: 'qDimensionInfo/1', key: 'hyper' },
        num: { value: 54, label: '$53', source: { field: 'qMeasureInfo/0', key: 'hyper' } }
      },
      {
        value: {
          qNum: 7, qText: 'sju', qElemNumber: 2, qRow: 6
        },
        label: 'sju',
        source: { field: 'qDimensionInfo/1', key: 'hyper' },
        num: { value: 58, label: '$57', source: { field: 'qMeasureInfo/0', key: 'hyper' } }
      },
      {
        value: {
          qNum: 1, qText: 'ett', qElemNumber: 3, qRow: 7
        },
        label: 'ett',
        source: { field: 'qDimensionInfo/1', key: 'hyper' },
        num: { value: 52, label: '$51', source: { field: 'qMeasureInfo/0', key: 'hyper' } }
      }
    ]);
  });

  it('should return collected values', () => {
    const fs = [{
      title: () => 'dim',
      key: () => 'dimension1',
      formatter: () => (() => '<>')
    }, {
      title: () => 'me',
      key: () => 'measure1',
      formatter: () => (() => '£')
    }];
    const c = {
      qMode: 'S',
      qDimensionInfo: [{ qStateCounts: {} }],
      qMeasureInfo: [{}],
      qDataPages: [{
        qArea: {
          qLeft: 0, qTop: 5, qWidth: 2, qHeight: 3
        },
        qMatrix: [
          [{ qNum: 3, qText: 'tre', qElemNumber: 1 }, { qNum: 34 }],
          [{ qNum: 5, qText: 'fem', qElemNumber: 1 }, { qNum: 36 }],
          [{ qNum: 1, qText: 'ett', qElemNumber: 3 }, { qNum: 38 }]
        ]
      }]
    };
    const ds = {
      raw: () => c,
      key: () => 'nyckel',
      field: sinon.stub()
    };

    ds.field.withArgs('dim').returns(fs[0]);
    ds.field.withArgs('me').returns(fs[1]);
    ds.field.throws({ message: 'Field not found' });

    const mainField = ds.field('dim');
    const meField = ds.field('me');
    deps.normalizeConfig.returns({
      main: {
        field: mainField,
        value: v => v,
        label: v => v.qText
      },
      props: {
        item: {
          value: d => d, label: v => v.qText, field: meField, source: { key: ds.key(), field: meField.key() }
        }
      }
    });
    const m = extract({
      field: 'dim',
      trackBy: 'qElemNumber'
    }, ds, { fields: fs }, deps);
    expect(m).to.eql([
      {
        value: [
          {
            qNum: 3, qText: 'tre', qElemNumber: 1, qRow: 5
          },
          {
            qNum: 5, qText: 'fem', qElemNumber: 1, qRow: 6
          }
        ],
        label: '<>',
        source: { field: 'dimension1', key: 'nyckel' },
        item: {
          value: [
            { qNum: 34, qRow: 5 },
            { qNum: 36, qRow: 6 }
          ],
          label: '£',
          source: { field: 'measure1', key: 'nyckel' }
        }
      },
      {
        value: [
          {
            qNum: 1, qText: 'ett', qElemNumber: 3, qRow: 7
          }
        ],
        label: '<>',
        source: { field: 'dimension1', key: 'nyckel' },
        item: {
          value: [{ qNum: 38, qRow: 7 }],
          label: '£',
          source: { field: 'measure1', key: 'nyckel' }
        }
      }
    ]);
  });

  it('should return reduced values', () => {
    const fs = [{
      title: () => 'reduceMe',
      key: () => 'reduuuced',
      formatter: () => {}
    }, {
      title: () => 'minime',
      key: () => 'measure1',
      formatter: () => (v => `£${v}`)
    }];
    const c = {
      qMode: 'S',
      qDimensionInfo: [{ qStateCounts: {} }],
      qMeasureInfo: [],
      qDataPages: [{
        qArea: {
          qLeft: 0, qTop: 5, qWidth: 2, qHeight: 3
        },
        qMatrix: [
          [{ qNum: 3, qText: 'tre', qElemNumber: 1 }, { qNum: 34 }],
          [{ qNum: 5, qText: 'fem', qElemNumber: 1 }, { qNum: 36 }],
          [{ qNum: 1, qText: 'ett', qElemNumber: 3 }, { qNum: 38 }]
        ]
      }]
    };
    const ds = {
      raw: () => c,
      key: () => 'nyckel',
      field: sinon.stub()
    };

    ds.field.withArgs('reduuuced').returns(fs[0]);
    ds.field.withArgs('minime').returns(fs[1]);
    ds.field.throws({ message: 'Field not found' });

    const mainField = ds.field('reduuuced');
    const meField = ds.field('minime');
    deps.normalizeConfig.returns({
      main: {
        field: mainField,
        value: v => v,
        label: v => v.qText,
        reduce: values => values.map(v => v.qText).join(',')
      },
      props: {
        item: { value: d => d.qElemNumber, field: mainField, source: { key: ds.key(), field: mainField.key() } },
        min: {
          value: d => d.qNum,
          field: meField,
          label: v => v.qText,
          source: { key: ds.key(), field: meField.key() },
          reduce: values => Math.min(...values)
        }
      }
    });
    const m = extract({
      field: 'reduuuced',
      trackBy: cell => cell.qElemNumber
    }, ds, { fields: fs }, deps);
    expect(m).to.eql([
      {
        value: 'tre,fem',
        label: 'tre,fem',
        source: { field: 'reduuuced', key: 'nyckel' },
        item: { value: [1, 1], label: '1,1', source: { field: 'reduuuced', key: 'nyckel' } },
        min: { value: 34, label: '£34', source: { field: 'measure1', key: 'nyckel' } }
      },
      {
        value: 'ett',
        label: 'ett',
        source: { field: 'reduuuced', key: 'nyckel' },
        item: { value: [3], label: '3', source: { field: 'reduuuced', key: 'nyckel' } },
        min: { value: 38, label: '£38', source: { field: 'measure1', key: 'nyckel' } }
      }
    ]);
  });

  it('should return reduced values from multiple fields when tracking', () => {
    const fs = [{
      title: () => 'reduceMe',
      key: () => 'reduuuced',
      formatter: () => (v => `<${v}>`)
    }, {
      title: () => 'minime',
      key: () => 'measure1',
      formatter: () => (v => `£${v}`)
    }, {
      title: () => 'negative',
      key: () => 'measure2',
      formatter: () => (v => `£${v}`)
    }];
    const c = {
      qMode: 'S',
      qDimensionInfo: [{ qStateCounts: {} }],
      qMeasureInfo: [],
      qDataPages: [{
        qArea: {
          qLeft: 0, qTop: 5, qWidth: 3, qHeight: 3
        },
        qMatrix: [
          [{ qNum: 3, qText: 'tre', qElemNumber: 1 }, { qNum: 34 }, { qNum: -20 }],
          [{ qNum: 5, qText: 'fem', qElemNumber: 1 }, { qNum: 36 }, { qNum: -30 }],
          [{ qNum: 1, qText: 'ett', qElemNumber: 3 }, { qNum: 38 }, { qNum: -40 }]
        ]
      }]
    };
    const ds = {
      raw: () => c,
      key: () => 'nyckel',
      field: sinon.stub()
    };

    ds.field.withArgs('reduuuced').returns(fs[0]);
    ds.field.withArgs('minime').returns(fs[1]);
    ds.field.withArgs('negative').returns(fs[2]);
    ds.field.throws({ message: 'Field not found' });

    const mainField = ds.field('reduuuced');
    const meField = ds.field('minime');
    const negField = ds.field('negative');
    deps.normalizeConfig.returns({
      main: {
        field: mainField,
        value: v => v,
        reduce: values => values.map(v => v.qText).join(',')
      },
      props: {
        total: {
          fields: [
            {
              value: d => d.qNum,
              field: meField,
              source: { key: ds.key(), field: meField.key() },
              reduce: values => Math.min(...values)
            },
            {
              value: d => d.qNum,
              field: negField,
              source: { key: ds.key(), field: negField.key() },
              reduce: values => Math.min(...values)
            }
          ],
          value: values => values.join('::'),
          label: values => values.join('---'),
          reduce: values => values.join(', ')
        }
      }
    });
    const m = extract({
      field: 'reduuuced',
      trackBy: cell => cell.qElemNumber
    }, ds, { fields: fs }, deps);
    expect(m).to.eql([
      {
        value: 'tre,fem',
        label: '<tre,fem>',
        source: { field: 'reduuuced', key: 'nyckel' },
        total: { value: '34::-20, 36::-30', label: '34::-20, 36::-30' }
      },
      {
        value: 'ett',
        label: '<ett>',
        source: { field: 'reduuuced', key: 'nyckel' },
        total: { value: '38::-40', label: '38::-40' }
      }
    ]);
  });

  it('should return reduced values from multiple fields without tracking', () => {
    const fs = [{
      title: () => 'reduceMe',
      key: () => 'reduuuced',
      formatter: () => (v => v.qText)
    }, {
      title: () => 'minime',
      key: () => 'measure1',
      formatter: () => (v => `£${v}`)
    }, {
      title: () => 'negative',
      key: () => 'measure2',
      formatter: () => (v => `£${v}`)
    }];
    const c = {
      qMode: 'S',
      qDimensionInfo: [{ qStateCounts: {} }],
      qMeasureInfo: [],
      qDataPages: [{
        qArea: {
          qLeft: 0, qTop: 5, qWidth: 3, qHeight: 3
        },
        qMatrix: [
          [{ qNum: 3, qText: 'tre', qElemNumber: 1 }, { qNum: 34 }, { qNum: -20 }],
          [{ qNum: 5, qText: 'fem', qElemNumber: 1 }, { qNum: 36 }, { qNum: -30 }],
          [{ qNum: 1, qText: 'ett', qElemNumber: 3 }, { qNum: 38 }, { qNum: -40 }]
        ]
      }]
    };
    const ds = {
      raw: () => c,
      key: () => 'nyckel',
      field: sinon.stub()
    };

    ds.field.withArgs('reduuuced').returns(fs[0]);
    ds.field.withArgs('minime').returns(fs[1]);
    ds.field.withArgs('negative').returns(fs[2]);
    ds.field.throws({ message: 'Field not found' });

    const mainField = ds.field('reduuuced');
    const meField = ds.field('minime');
    const negField = ds.field('negative');
    deps.normalizeConfig.returns({
      main: {
        field: mainField,
        value: v => v.qText,
        reduce: values => values.map(v => v.qText).join(',')
      },
      props: {
        total: {
          fields: [
            {
              value: d => d.qNum,
              field: meField,
              source: { key: ds.key(), field: meField.key() },
              reduce: values => Math.min(...values)
            },
            {
              value: d => d.qNum,
              field: negField,
              source: { key: ds.key(), field: negField.key() },
              reduce: values => Math.min(...values)
            }
          ],
          value: values => values.join(':'),
          label: values => values.join('|')
        }
      }
    });
    const m = extract({
      field: 'reduuuced'
    }, ds, { fields: fs }, deps);
    expect(m).to.eql([
      {
        value: 'tre',
        label: 'tre',
        source: { field: 'reduuuced', key: 'nyckel' },
        total: { value: '34:-20', label: '34|-20' }
      },
      {
        value: 'fem',
        label: 'fem',
        source: { field: 'reduuuced', key: 'nyckel' },
        total: { value: '36:-30', label: '36|-30' }
      },
      {
        value: 'ett',
        label: 'ett',
        source: { field: 'reduuuced', key: 'nyckel' },
        total: { value: '38:-40', label: '38|-40' }
      }
    ]);
  });


  it('should return filtered main values', () => {
    deps.normalizeConfig.returns({
      main: {
        field: dataset.field('Dim2'),
        label: d => d.qText,
        filter: v => v.qNum !== 7
      },
      props: {}
    });
    const m = extract({
      field: 'Dim2'
    }, dataset, cache, deps);
    expect(m).to.eql([
      {
        value: {
          qNum: 3, qText: 'tre', qElemNumber: 1, qRow: 5
        },
        label: 'tre',
        source: { field: 'qDimensionInfo/1', key: 'hyper' }
      },
      {
        value: {
          qNum: 1, qText: 'ett', qElemNumber: 3, qRow: 7
        },
        label: 'ett',
        source: { field: 'qDimensionInfo/1', key: 'hyper' }
      }
    ]);
  });

  describe('getFieldAccessor', () => {
    const localCache = {
      fields: [{}, {}, {}],
      wrappedFields: [
        { attrDims: [], attrExps: [] },
        { attrDims: [{}, { instance: {} }], attrExps: [] },
        { attrDims: [], attrExps: [{}, { instance: {} }] }
      ]
    };

    it('should return -1 when field is falsy', () => {
      const acc = getFieldAccessor(0);
      expect(acc).to.equal(-1);
    });

    it('should return -1 if field is out of bounds', () => {
      const f = localCache.fields[1];
      const acc = getFieldAccessor(f, {
        qArea: { qLeft: 2 }
      }, { cache: localCache });
      expect(acc).to.equal(-1);
    });

    it('should return a field accessor for the second column', () => {
      const f = localCache.fields[2];
      const row = ['a', 'b'];
      const acc = getFieldAccessor(f, {
        qArea: { qLeft: 1 }
      }, { cache: localCache });
      expect(acc(row)).to.equal('b');
    });

    it('should return a field accessor for an attribute dimension', () => {
      const f = localCache.wrappedFields[1].attrDims[1].instance;
      const row = ['a', {
        qAttrDims: {
          qValues: [{}, 'target']
        }
      }];
      const acc = getFieldAccessor(f, {
        qArea: { qLeft: 0 }
      }, { cache: localCache });
      expect(acc(row)).to.equal('target');
    });

    it('should return a field accessor for an attribute expression', () => {
      const f = localCache.wrappedFields[2].attrExps[1].instance;
      const row = ['a', {
        qAttrExps: {
          qValues: [{}, 'exp']
        }
      }];
      const acc = getFieldAccessor(f, {
        qArea: { qLeft: 1 }
      }, { cache: localCache });
      expect(acc(row)).to.equal('exp');
    });

    it('should return origin field accessor for virtual field', () => {
      const f = {
        origin: () => localCache.fields[2]
      };
      const row = ['a', 'b'];
      const acc = getFieldAccessor(f, {
        qArea: { qLeft: 1 }
      }, { cache: localCache });
      expect(acc(row)).to.equal('b');
    });
  });
});
