import React, { FunctionComponent } from "react";
import { ChildComponentProps } from "google-map-react";


const Marker: FunctionComponent<ChildComponentProps> = (): JSX.Element => {
    return (           
        // SVG code for the tree marker. May need to change
        <div>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25.000000pt" height="21.750000pt" viewBox="0 0 300.000000 261.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,261.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M1587 2580 c-34 -40 -43 -91 -25 -138 17 -44 34 -47 62 -9 26 36 29 121 5 155 l-16 23 -26 -31z m33 -60 c0 -16 -5 -41 -11 -57 -8 -22 -12 -24 -19 -13 -13 20 -12 52 0 85 12 32 30 24 30 -15z" />
                    <path d="M1875 2485 c-8 -53 15 -107 58 -139 24 -18 29 -19 37 -6 14 22 12 76 -4 114 -12 28 -62 76 -79 76 -3 0 -9 -20 -12 -45z m59 -31 c10 -14 16 -39 14 -57 l-3 -32 -23 35 c-22 35 -30 80 -13 80 5 0 16 -11 25 -26z" />
                    <path d="M1251 2450 c-33 -55 -36 -93 -11 -145 21 -44 23 -45 41 -29 44 39 49 138 10 185 l-19 23 -21 -34z m39 -76 c0 -16 -7 -39 -15 -50 -13 -17 -14 -14 -15 37 0 31 3 59 7 62 10 11 23 -15 23 -49z" />
                    <path d="M2186 2449 c-36 -28 -56 -70 -56 -116 0 -59 12 -70 48 -45 39 29 65 94 57 144 -8 44 -13 46 -49 17z m14 -62 c-7 -47 -16 -67 -31 -67 -17 0 -9 57 12 84 11 14 22 26 23 26 2 0 0 -19 -4 -43z" /> 
                    <path d="M1393 2403 c-27 -63 -23 -149 11 -216 27 -56 98 -123 116 -112 5 3 16 28 25 56 23 68 15 143 -21 210 -25 45 -83 99 -107 99 -4 0 -15 -17 -24 -37z m80 -42 c54 -59 73 -157 44 -224 l-12 -29 -28 22 c-46 36 -67 90 -67 169 0 71 6 101 20 101 4 0 24 -18 43 -39z" /> 
                    <path d="M1711 2404 c-54 -48 -84 -113 -85 -183 -1 -53 27 -151 43 -151 17 0 84 66 109 108 23 40 27 58 27 122 0 74 -22 140 -45 140 -6 0 -28 -16 -49 -36z m60 -35 c22 -79 3 -161 -51 -220 -45 -50 -54 -46 -65 29 -9 63 10 133 52 182 38 44 54 47 64 9z" /> 
                    <path d="M937 2363 c-17 -29 -17 -75 1 -117 21 -45 63 -83 82 -71 19 12 12 100 -12 135 -26 37 -64 65 -71 53z m63 -114 c0 -16 -4 -29 -10 -29 -15 0 -30 36 -30 72 l1 33 19 -24 c11 -13 20 -36 20 -52z" /> 
                    <path d="M2364 2309 c-18 -5 -53 -24 -80 -41 -67 -46 -104 -118 -104 -204 l0 -64 28 6 c52 12 126 59 154 98 36 51 62 137 54 182 -4 19 -10 34 -14 33 -4 0 -21 -5 -38 -10z m16 -72 c0 -80 -69 -169 -147 -192 -21 -6 -23 -3 -23 35 0 75 48 148 120 182 49 23 50 23 50 -25z" /> 
                    <path d="M1981 2235 c-79 -72 -106 -187 -68 -287 10 -27 22 -48 26 -48 4 0 27 17 51 37 54 47 90 121 90 189 0 61 -26 144 -46 144 -8 0 -32 -16 -53 -35z m67 -84 c5 -74 -8 -116 -55 -171 -34 -39 -38 -41 -50 -24 -19 26 -17 148 3 190 21 45 73 89 87 75 6 -6 13 -37 15 -70z" /> 
                    <path d="M1155 2206 c-29 -38 -55 -112 -55 -156 0 -49 29 -126 63 -165 l33 -38 21 29 c45 64 57 98 57 164 0 69 -30 145 -72 183 -20 18 -21 17 -47 -17z m63 -55 c40 -72 20 -258 -27 -249 -51 10 -76 188 -36 256 11 17 24 32 30 32 6 0 21 -17 33 -39z" /> 
                    <path d="M722 2157 c10 -124 87 -211 211 -241 l27 -6 0 57 c0 67 -31 143 -76 185 -34 32 -109 67 -143 68 -23 0 -24 -2 -19 -63z m105 -3 c59 -34 103 -103 103 -161 0 -48 -6 -51 -58 -24 -70 36 -122 113 -122 181 0 38 18 39 77 4z" /> 
                    <path d="M560 2175 c-14 -36 -13 -48 6 -95 20 -49 71 -91 85 -69 28 45 -3 141 -58 177 -21 13 -23 12 -33 -13z m70 -104 l-1 -36 -19 24 c-12 14 -20 38 -20 60 l1 36 19 -24 c12 -14 20 -38 20 -60z" /> 
                    <path d="M2540 2168 c-27 -14 -50 -36 -62 -58 l-18 -35 45 -3 c56 -4 101 20 129 67 16 28 17 34 5 42 -23 14 -52 10 -99 -13z m60 -27 c0 -16 -43 -41 -70 -41 l-25 1 28 24 c28 25 67 34 67 16z" /> 
                    <path d="M1356 2078 c-43 -146 -57 -293 -35 -373 6 -22 32 -87 59 -145 53 -115 75 -191 85 -290 l6 -65 -28 31 c-93 101 -241 277 -275 327 -80 117 -117 235 -119 378 -2 120 -17 69 -18 -60 -1 -170 29 -258 154 -441 153 -223 178 -264 211 -335 37 -80 78 -215 87 -287 l6 -47 -83 82 c-46 45 -117 107 -159 137 -83 60 -88 69 -147 235 -45 130 -94 224 -146 281 -30 32 -38 38 -24 17 35 -53 66 -132 103 -263 19 -69 38 -133 42 -142 6 -16 -256 132 -429 242 -33 21 -62 37 -64 35 -2 -2 -1 -12 3 -23 11 -38 82 -99 221 -193 120 -81 254 -193 243 -203 -2 -2 -33 2 -69 10 -155 33 -301 47 -475 48 -154 1 -189 -2 -240 -19 l-60 -20 50 -2 c497 -25 776 -116 958 -313 70 -75 131 -197 148 -295 15 -87 5 -257 -19 -328 l-17 -52 241 0 242 0 -20 39 c-31 62 -70 250 -71 346 -2 238 130 460 333 558 47 22 128 56 181 75 185 67 259 116 321 211 41 63 49 89 20 63 -31 -28 -143 -74 -282 -116 -74 -22 -136 -38 -138 -36 -7 7 82 130 132 184 28 30 69 67 90 82 65 48 24 33 -60 -22 -48 -31 -128 -100 -203 -176 -103 -103 -134 -128 -184 -148 -109 -45 -209 -124 -251 -200 -17 -30 -17 -29 -11 48 13 174 98 327 238 433 89 67 176 115 330 183 152 68 211 101 227 130 16 31 12 32 -26 6 -45 -30 -112 -51 -224 -69 -47 -8 -98 -18 -114 -22 -26 -6 -28 -5 -22 12 34 89 48 173 43 264 -7 133 -25 175 -27 60 -2 -225 -60 -330 -260 -468 -52 -37 -121 -91 -152 -121 -45 -42 -58 -50 -58 -35 0 50 37 153 110 305 112 231 131 337 86 480 l-14 44 -1 -35 c-2 -50 -36 -187 -62 -244 -12 -27 -52 -102 -90 -165 -37 -64 -71 -128 -74 -143 -4 -16 -11 -28 -15 -28 -19 0 -150 153 -176 206 -28 57 -29 64 -28 199 0 77 5 158 12 179 6 22 10 42 7 44 -2 2 -11 -20 -19 -50z m434 -277 c-6 -25 -43 -110 -81 -188 -84 -172 -109 -241 -109 -303 0 -77 19 -82 82 -22 29 27 85 72 123 98 104 72 167 123 200 164 l29 36 21 -24 c20 -23 24 -24 74 -13 94 20 88 11 -37 -53 -187 -98 -298 -190 -370 -310 -84 -138 -120 -366 -58 -366 7 0 31 23 52 52 51 69 121 121 217 160 67 28 86 42 135 99 31 37 66 72 77 79 19 12 19 12 2 -13 -20 -31 -22 -61 -4 -75 14 -12 141 19 278 67 44 16 78 23 76 17 -9 -27 -111 -89 -207 -126 -58 -22 -139 -55 -180 -72 -221 -93 -339 -226 -401 -453 -18 -67 -21 -96 -16 -195 4 -103 32 -245 62 -312 7 -17 -6 -18 -190 -18 l-197 0 7 23 c4 12 10 95 12 184 4 135 2 170 -12 215 -65 199 -211 351 -427 445 -76 33 -243 79 -368 101 l-55 10 70 -5 c113 -7 315 -33 384 -49 58 -14 66 -14 80 1 14 14 14 18 -4 51 -22 42 -79 91 -201 174 -48 33 -84 60 -80 60 4 0 69 -36 145 -80 76 -44 142 -80 146 -80 5 0 16 7 26 16 16 14 19 12 44 -33 18 -34 48 -64 100 -102 41 -29 110 -89 155 -132 44 -43 87 -79 94 -79 56 0 12 219 -79 400 -15 30 -65 110 -111 177 -46 68 -84 125 -84 128 0 3 30 -30 67 -73 36 -42 77 -88 89 -102 12 -14 38 -43 57 -65 30 -34 37 -37 51 -26 12 10 16 31 16 78 0 88 -22 167 -81 292 -55 117 -62 143 -21 83 34 -51 113 -135 146 -157 32 -21 43 -14 71 50 13 29 40 78 60 109 41 65 124 232 127 255 0 9 3 1 5 -18 3 -19 -1 -55 -7 -80z" /> <path d="M390 2049 c0 -24 33 -79 58 -95 34 -22 86 -34 103 -23 20 12 -17 77 -60 106 -35 24 -101 31 -101 12z m116 -60 c23 -26 12 -35 -26 -19 -26 11 -50 36 -50 54 0 11 59 -16 76 -35z" /> <path d="M1569 2004 c-98 -72 -131 -211 -78 -328 12 -25 12 -25 41 -8 66 38 118 134 118 216 0 42 -25 132 -39 141 -5 2 -23 -7 -42 -21z m42 -51 c18 -46 5 -144 -25 -191 -24 -39 -62 -69 -73 -59 -3 3 -9 24 -14 48 -15 65 5 142 48 190 19 21 39 39 44 39 5 0 14 -12 20 -27z" /> <path d="M2657 2000 c-21 -4 -51 -20 -67 -35 -29 -28 -58 -91 -46 -102 3 -3 22 -2 43 2 51 9 113 72 113 114 0 17 -1 30 -2 30 -2 -1 -20 -5 -41 -9z m7 -42 c-16 -30 -49 -58 -66 -58 -24 0 -23 12 5 37 32 30 74 44 61 21z" /> 
                    <path d="M2390 1961 c-102 -31 -175 -118 -187 -223 l-6 -50 44 7 c130 21 214 105 233 233 l6 42 -32 -1 c-18 0 -44 -4 -58 -8z m30 -114 c-12 -23 -32 -50 -43 -60 -29 -25 -96 -57 -123 -57 -19 0 -21 4 -14 38 13 74 61 125 142 153 l53 18 3 -25 c2 -14 -6 -44 -18 -67z" /> 
                    <path d="M705 1833 c22 -123 126 -213 244 -213 l49 0 -9 39 c-14 62 -26 86 -61 126 -43 49 -119 85 -182 85 l-48 0 7 -37z m130 -17 c58 -27 88 -57 110 -108 23 -56 21 -61 -26 -55 -84 11 -178 98 -179 165 0 29 30 29 95 -2z" /> 
                    <path d="M310 1843 c1 -29 39 -106 68 -137 43 -46 117 -76 190 -76 l62 0 -6 28 c-11 48 -56 121 -90 147 -47 36 -107 55 -170 55 -45 0 -54 -3 -54 -17z m169 -41 c48 -25 75 -50 95 -91 23 -43 20 -51 -18 -51 -76 0 -159 49 -192 112 -26 50 -20 61 30 56 25 -3 63 -15 85 -26z" /> 
                    <path d="M2727 1849 c-21 -5 -50 -15 -66 -24 -40 -20 -105 -97 -118 -139 -13 -42 -7 -46 75 -46 66 0 142 32 184 76 25 27 74 122 66 129 -10 9 -109 12 -141 4z m103 -36 c0 -18 -41 -73 -72 -95 -43 -32 -90 -48 -144 -48 -30 0 -44 4 -44 13 0 24 73 99 114 118 40 18 146 26 146 12z" /> 
                    <path d="M1165 1762 c-8 -50 18 -115 57 -144 36 -25 48 -14 48 45 0 46 -20 88 -56 116 -36 29 -41 27 -49 -17z m75 -83 c0 -16 -5 -29 -11 -29 -13 0 -39 62 -39 92 1 23 1 22 25 -5 15 -16 25 -40 25 -58z" /> <path d="M2860 1653 c-29 -11 -70 -44 -70 -57 0 -30 90 -47 133 -25 26 14 67 50 67 59 0 22 -91 37 -130 23z m75 -33 c7 -12 -36 -30 -71 -30 -32 0 -27 22 7 31 36 10 57 10 64 -1z" /> 
                    <path d="M183 1603 c-28 -5 -28 -15 -2 -73 42 -94 122 -149 226 -158 77 -6 84 4 53 77 -24 55 -83 115 -134 136 -37 15 -112 24 -143 18z m120 -45 c70 -21 161 -128 133 -155 -12 -12 -118 16 -152 39 -33 23 -84 92 -84 115 0 17 49 17 103 1z" /> <path d="M656 1553 c-14 -4 -17 -11 -12 -36 21 -107 139 -197 256 -197 54 0 59 8 44 60 -17 58 -72 122 -127 149 -43 21 -128 34 -161 24z m161 -61 c22 -12 50 -33 61 -46 24 -32 47 -85 39 -93 -13 -13 -124 18 -162 46 -44 32 -92 110 -75 121 17 11 91 -5 137 -28z" /> 
                    <path d="M2600 1531 c-48 -15 -87 -40 -122 -79 -36 -40 -66 -108 -53 -120 4 -4 39 -7 78 -7 110 1 191 54 236 155 19 42 19 45 3 52 -23 9 -111 8 -142 -1z m114 -30 c6 -9 -40 -76 -70 -102 -23 -20 -105 -49 -139 -49 -43 0 -56 9 -44 33 28 54 95 107 154 120 36 8 94 7 99 -2z" />
                    <path d="M2824 1451 c-46 -28 -48 -37 -10 -55 60 -28 139 -16 175 28 10 12 7 17 -18 30 -41 22 -109 20 -147 -3z m116 -20 c0 -13 -26 -21 -66 -21 -33 0 -46 14 -21 23 21 9 87 7 87 -2z" />
                    <path d="M83 1343 c-18 -9 -33 -20 -33 -24 0 -12 65 -48 97 -55 20 -4 47 1 78 15 53 24 51 36 -9 65 -43 20 -91 19 -133 -1z m104 -24 c26 -10 27 -12 8 -19 -33 -13 -98 6 -74 21 19 12 32 11 66 -2z" /> 
                    <path d="M2727 1302 l-38 -17 30 -29 c21 -20 43 -30 75 -33 43 -5 106 11 106 26 0 16 -48 52 -81 61 -44 13 -47 13 -92 -8z m107 -28 c29 -11 17 -24 -22 -24 -21 0 -47 7 -58 15 -18 13 -16 14 23 15 23 0 48 -3 57 -6z" /> 
                    <path d="M372 1271 c-29 -10 -58 -23 -63 -28 -13 -13 55 -89 105 -116 56 -30 174 -31 229 -1 l37 20 -25 34 c-35 48 -96 86 -156 99 -64 14 -64 14 -127 -8z m174 -40 c40 -18 84 -56 84 -73 0 -14 -84 -30 -127 -24 -66 9 -153 59 -153 87 0 31 134 38 196 10z" />
                    <path d="M2666 1156 c-48 -18 -98 -53 -126 -88 l-21 -27 24 -16 c60 -39 175 -47 243 -16 39 18 114 85 114 102 0 5 -19 18 -42 30 -53 27 -141 34 -192 15z m157 -35 c20 -7 37 -15 37 -18 0 -10 -46 -45 -85 -63 -45 -22 -125 -26 -174 -9 -37 13 -38 19 -8 47 56 52 150 70 230 43z" />
                    <path d="M65 1136 c-16 -7 -39 -23 -49 -35 -19 -21 -19 -21 17 -36 58 -24 109 -15 155 27 29 28 28 34 -9 47 -41 14 -77 13 -114 -3z m86 -31 c1 -14 -65 -29 -87 -20 -17 6 -15 9 11 21 33 15 75 14 76 -1z" /> 
                    <path d="M2300 981 c-41 -13 -84 -37 -105 -61 -19 -22 -19 -22 5 -41 80 -65 197 -79 287 -34 28 14 58 34 67 44 15 17 13 19 -26 48 -24 16 -58 35 -77 41 -38 13 -113 14 -151 3z m180 -51 c23 -12 38 -25 34 -31 -14 -23 -90 -49 -144 -49 -54 0 -130 26 -144 49 -7 11 41 40 89 52 45 12 119 3 165 -21z" /> 
                    <path d="M245 941 c-41 -10 -108 -46 -125 -65 -11 -14 -10 -20 6 -37 39 -43 94 -64 174 -64 64 0 82 4 121 27 87 51 87 69 -5 112 -57 28 -126 39 -171 27z m151 -50 c59 -27 61 -37 12 -63 -32 -16 -60 -22 -108 -22 -69 0 -157 34 -144 55 14 23 90 49 144 49 32 0 72 -8 96 -19z" /> 
                    <path d="M2645 890 c-10 -16 21 -58 58 -80 38 -24 127 -28 127 -6 0 20 -38 65 -70 81 -33 17 -106 20 -115 5z m99 -34 c47 -19 54 -36 17 -36 -33 0 -101 49 -68 50 10 0 33 -6 51 -14z" /> 
                    <path d="M601 858 c-19 -12 -41 -33 -49 -45 -13 -21 -12 -23 14 -34 55 -20 126 5 160 56 21 32 16 37 -43 42 -39 4 -55 0 -82 -19z m89 -18 c0 -12 -26 -26 -67 -35 -22 -4 -33 -3 -33 5 0 12 55 39 83 40 9 0 17 -4 17 -10z" /> 
                    <path d="M2064 844 c3 -9 6 -25 6 -36 0 -11 17 -38 39 -59 31 -31 46 -39 75 -39 35 0 36 1 30 28 -12 49 -38 82 -79 102 -51 25 -80 26 -71 4z m85 -50 c31 -25 41 -54 20 -54 -14 0 -69 55 -69 69 0 18 16 13 49 -15z" /> 
                </g> 
            </svg>
        </div>
    );
};

export default Marker;