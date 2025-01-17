import { GrMoney } from 'react-icons/gr';
import { IoMdCafe, IoMdAdd } from 'react-icons/io';
import {
  BiDrink,
  BiMouseAlt,
  BiPencil,
  BiSave,
  BiLeftArrow,
  BiRightArrow,
  BiMessageAdd,
  BiNetworkChart,
  BiCar,
  BiBaseball,
} from 'react-icons/bi';
import { HiShoppingCart } from 'react-icons/hi';
import {
  FaShoppingBag,
  FaBriefcaseMedical,
  FaRegTrashAlt,
  FaSchool,
} from 'react-icons/fa';
import { GiMeal, GiLoveInjection } from 'react-icons/gi';
import {
  MdMoreVert,
  MdLocalOffer,
  MdLocalMovies,
  MdAirplanemodeActive,
} from 'react-icons/md';
import { FcPlus } from 'react-icons/fc';
import { BsFileSpreadsheet } from 'react-icons/bs';

const icon = {
  meal: <GiMeal size={15} />,
  cafe: <IoMdCafe size={15} />,
  drink: <BiDrink size={15} />,
  living: <HiShoppingCart size={15} />,
  onlineShopping: <BiMouseAlt size={15} />,
  shopping: <FaShoppingBag size={12} />,
  finance: <GrMoney size={13} />,
  medical: <FaBriefcaseMedical size={12} />,
  beauty: <GiLoveInjection size={14} />,
  network: <BiNetworkChart size={14} />,
  school: <FaSchool size={14} />,
  movie: <MdLocalMovies size={14} />,
  ball: <BiBaseball size={14} />,
  car: <BiCar size={14} />,
  airplane: <MdAirplanemodeActive size={14} />,
  more: <MdMoreVert size={20} />,
  tagDefault: <MdLocalOffer size={15} />,
  plus: <IoMdAdd size={15} />,
  addBtn: (
    <FcPlus
      size={40}
      style={{
        filter: `drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.173))`,
      }}
    />
  ),
  largeAddBtn: (
    <FcPlus
      size={60}
      style={{
        filter: `drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.173))`,
      }}
    />
  ),
  edit: <BiPencil size={14} />,
  save: <BiSave size={14} />,
  leftArrow: <BiLeftArrow size={15} />,
  rightArrow: <BiRightArrow size={15} />,
  message: <BiMessageAdd size={15} />,
  spreadsheet: <BsFileSpreadsheet size={15} />,
  trashcan: <FaRegTrashAlt size={15} />,
  one: (
    <svg width="20px" height="16px" viewBox="0 0 785.000000 1280.000000">
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        fill="#e91e63"
        stroke="none"
      >
        <path d="M4495 12298 c-604 -535 -1486 -866 -2660 -998 -331 -37 -854 -70 -1104 -70 l-101 0 -2 -415 -3 -416 30 -29 30 -29 735 -4 c620 -3 753 -7 850 -21 149 -22 254 -50 316 -86 82 -46 123 -142 161 -372 16 -95 18 -371 21 -3663 2 -2593 0 -3591 -8 -3675 -44 -446 -177 -714 -416 -838 -279 -144 -663 -202 -1350 -202 l-330 0 -27 -28 -27 -28 0 -389 0 -389 27 -28 27 -28 3386 0 3386 0 27 28 27 28 0 390 0 390 -27 26 -28 26 -390 5 c-415 5 -557 17 -779 62 -212 43 -367 103 -480 187 -156 115 -260 347 -312 693 -17 114 -18 350 -21 5005 l-3 4884 -27 28 -27 28 -410 -1 -411 0 -80 -71z" />
      </g>
    </svg>
  ),
  two: (
    <svg width="20px" height="16px" viewBox="0 0 810.000000 1280.000000">
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        fill="#4caf50"
        stroke="none"
      >
        <path d="M3445 12403 c-603 -49 -1043 -156 -1471 -358 -581 -274 -1041 -698 -1289 -1188 -146 -289 -219 -588 -232 -942 -19 -539 124 -953 437 -1265 194 -194 412 -311 693 -372 138 -30 484 -33 619 -5 263 53 486 170 666 348 227 225 340 462 373 782 43 426 -125 829 -430 1031 -36 24 -198 103 -360 176 -162 72 -306 139 -320 148 -41 25 -81 65 -97 94 -45 87 31 236 184 357 259 207 614 321 994 321 850 -1 1367 -467 1517 -1367 36 -214 45 -343 45 -623 -1 -503 -68 -912 -229 -1395 -164 -492 -361 -863 -716 -1345 -284 -385 -570 -731 -1055 -1276 -814 -914 -1076 -1226 -1345 -1605 -715 -1005 -1043 -1906 -1105 -3032 l-7 -128 28 -30 29 -29 3417 0 3416 0 6 33 c2 17 107 771 233 1674 l228 1643 -29 30 -29 30 -388 0 -388 0 -4 -22 c-3 -13 -15 -84 -27 -158 -42 -264 -115 -504 -196 -650 -118 -211 -334 -300 -798 -330 -86 -6 -907 -10 -1934 -10 l-1783 0 7 28 c22 91 169 383 287 572 250 399 666 844 1149 1231 298 239 521 394 964 669 826 512 1176 750 1581 1074 567 452 884 819 1123 1296 245 491 354 1007 338 1610 -6 239 -21 379 -63 579 -174 844 -721 1532 -1559 1962 -484 249 -1031 392 -1680 439 -126 9 -700 12 -800 3z" />
      </g>
    </svg>
  ),
  three: (
    <svg width="20px" height="16px" viewBox="0 0 817.000000 1280.000000">
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        fill="#ffeb3b"
        stroke="none"
      >
        <path d="M3600 12374 c-221 -15 -362 -27 -465 -40 -729 -91 -1321 -315 -1780 -675 -119 -93 -317 -292 -396 -399 -170 -229 -275 -472 -331 -770 -19 -96 -22 -152 -23 -340 0 -194 3 -240 22 -335 40 -195 103 -355 196 -499 217 -332 548 -535 960 -586 125 -16 403 -7 507 15 251 55 448 162 633 343 199 195 311 432 339 714 44 454 -160 879 -612 1273 -123 107 -150 141 -142 180 13 72 170 179 342 235 213 69 530 77 790 20 124 -26 201 -54 325 -115 401 -198 708 -627 855 -1194 134 -515 154 -1238 49 -1766 -84 -423 -249 -765 -483 -1001 -158 -160 -310 -248 -515 -301 -130 -33 -263 -39 -514 -22 -117 8 -289 14 -382 14 l-170 0 -67 -33 c-77 -38 -171 -127 -211 -200 -124 -228 -36 -500 198 -612 127 -61 284 -73 590 -45 206 19 303 19 433 -1 268 -40 476 -145 668 -338 261 -264 438 -668 529 -1210 36 -217 53 -395 67 -693 24 -529 -26 -1002 -143 -1369 -218 -681 -644 -1103 -1237 -1223 -222 -46 -505 -52 -712 -16 -309 54 -618 230 -662 378 l-12 39 50 47 c28 25 105 92 172 149 299 253 484 542 553 862 29 137 32 389 6 523 -80 404 -343 718 -737 880 -192 79 -378 111 -645 111 -215 0 -305 -12 -472 -60 -345 -99 -672 -375 -839 -707 -135 -268 -181 -623 -127 -982 85 -573 421 -1063 1005 -1468 614 -426 1386 -656 2293 -686 1451 -47 2614 329 3380 1094 423 422 662 897 756 1505 20 125 23 185 23 440 1 312 -6 399 -50 650 -220 1232 -1121 2032 -2739 2431 -110 27 -208 49 -217 49 -42 0 -12 17 70 39 48 13 190 57 316 98 1174 382 1881 924 2201 1688 125 298 174 554 182 943 7 369 -15 584 -93 881 -47 182 -91 297 -184 486 -162 328 -384 604 -676 839 -526 423 -1180 662 -2029 742 -150 14 -724 26 -845 18z" />
      </g>
    </svg>
  ),
};

export default icon;
