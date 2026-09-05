export type FaceShapeId = "ovalado" | "redondo" | "cuadrado" | "corazon" | "diamante" | "alargado";

export function FaceShapePortrait({ id }: { id: FaceShapeId }) {
  switch (id) {
    case "ovalado":
      return (
        <svg viewBox="0 0 200 240" className="face-shape-portrait" aria-hidden="true">
          <defs>
            <linearGradient id="skin-ov" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdfbf7" />
              <stop offset="100%" stopColor="#ece5d8" />
            </linearGradient>
            <linearGradient id="gold-ov" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c59b27" />
              <stop offset="100%" stopColor="#e5be58" />
            </linearGradient>
          </defs>
          {/* Cuello y hombros */}
          <path d="M78 160 L78 205 C78 215 50 220 20 236 L180 236 C150 220 122 215 122 205 L122 160 Z" fill="#ece4d6" opacity="0.6" />
          <path d="M78 165 C85 178 115 178 122 165" fill="none" stroke="#d5c8b2" strokeWidth="1.2" />
          <path d="M92 185 L84 218 M108 185 L116 218" fill="none" stroke="#d5c8b2" strokeWidth="1" opacity="0.5" />
          
          {/* Orejas */}
          <path d="M42 98 C36 98 32 108 34 118 C36 128 42 132 46 130" fill="#f5ede0" stroke="#bda582" strokeWidth="1.2" />
          <path d="M37 106 C35 112 37 120 40 124" fill="none" stroke="#c8b598" strokeWidth="1" />
          <path d="M158 98 C164 98 168 108 166 118 C164 128 158 132 154 130" fill="#f5ede0" stroke="#bda582" strokeWidth="1.2" />
          <path d="M163 106 C165 112 163 120 160 124" fill="none" stroke="#c8b598" strokeWidth="1" />

          {/* Cabello fondo */}
          <path d="M40 90 C34 60 48 24 100 24 C152 24 166 60 160 90 C168 135 152 170 148 180 C140 140 144 100 144 90 C144 42 136 34 100 34 C64 34 56 42 56 90 C56 100 60 140 52 180 C48 170 32 135 40 90 Z" fill="#2d2926" />

          {/* Rostro: Óvalo armónico, proporciones equilibradas 1.5 a 1 */}
          <path d="M100 36 C136 36 154 62 154 105 C154 134 142 158 126 172 C114 182 106 186 100 186 C94 186 86 182 74 172 C58 158 46 134 46 105 C46 62 64 36 100 36 Z" fill="url(#skin-ov)" stroke="#2d2926" strokeWidth="1.5" />

          {/* Línea del cabello frontal */}
          <path d="M54 75 C66 48 84 46 100 46 C116 46 134 48 146 75 C132 60 118 56 100 56 C82 56 68 60 54 75 Z" fill="#2d2926" />

          {/* Cejas proporcionadas */}
          <path d="M60 88 C70 82 82 84 86 89" fill="none" stroke="#2d2926" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M140 88 C130 82 118 84 114 89" fill="none" stroke="#2d2926" strokeWidth="2.2" strokeLinecap="round" />

          {/* Ojos almendrados y expresivos */}
          <path d="M63 98 Q73 92 83 98 Q73 104 63 98 Z" fill="#ffffff" stroke="#2d2926" strokeWidth="1.2" />
          <circle cx="73" cy="98" r="3.2" fill="#2d2926" />
          <circle cx="74.2" cy="96.8" r="1" fill="#ffffff" />
          <path d="M62 96 Q73 90 84 96" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          <path d="M137 98 Q127 92 117 98 Q127 104 137 98 Z" fill="#ffffff" stroke="#2d2926" strokeWidth="1.2" />
          <circle cx="127" cy="98" r="3.2" fill="#2d2926" />
          <circle cx="128.2" cy="96.8" r="1" fill="#ffffff" />
          <path d="M138 96 Q127 90 116 96" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          {/* Nariz fina y proporcionada */}
          <path d="M100 86 L98 122 C95 125 93 128 96 130 C99 131 101 131 104 130 C107 128 105 125 102 122" fill="none" stroke="#2d2926" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="95" cy="128" r="0.9" fill="#2d2926" />
          <circle cx="105" cy="128" r="0.9" fill="#2d2926" />

          {/* Labios con arco de cupido equilibrado */}
          <path d="M86 150 Q93 146 100 148 Q107 146 114 150 Q107 155 100 155 Q93 155 86 150 Z" fill="#d99988" stroke="#2d2926" strokeWidth="1.1" />
          <path d="M88 150 Q100 152 112 150" fill="none" stroke="#2d2926" strokeWidth="1" />
          <path d="M92 154 Q100 162 108 154" fill="none" stroke="#c07d6d" strokeWidth="1" />

          {/* Mentón suave */}
          <path d="M95 174 Q100 176 105 174" fill="none" stroke="#c9b69b" strokeWidth="1.2" strokeLinecap="round" />

          {/* Pómulos armónicos sutiles */}
          <path d="M58 116 Q65 122 72 118" fill="none" stroke="#e0cbb2" strokeWidth="1.4" opacity="0.6" strokeLinecap="round" />
          <path d="M142 116 Q135 122 128 118" fill="none" stroke="#e0cbb2" strokeWidth="1.4" opacity="0.6" strokeLinecap="round" />

          {/* LÍNEA GUÍA GEOMÉTRICA DORADA: Elipse perfecta de balance */}
          <ellipse cx="100" cy="111" rx="55" ry="76" fill="none" stroke="url(#gold-ov)" strokeWidth="1.8" strokeDasharray="5 4" opacity="0.9" />
          <circle cx="100" cy="35" r="3" fill="#c59b27" />
          <circle cx="100" cy="187" r="3" fill="#c59b27" />
          <circle cx="45" cy="111" r="3" fill="#c59b27" />
          <circle cx="155" cy="111" r="3" fill="#c59b27" />
        </svg>
      );

    case "redondo":
      return (
        <svg viewBox="0 0 200 240" className="face-shape-portrait" aria-hidden="true">
          <defs>
            <linearGradient id="skin-rd" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdfbf7" />
              <stop offset="100%" stopColor="#ebe4d7" />
            </linearGradient>
            <linearGradient id="gold-rd" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c59b27" />
              <stop offset="100%" stopColor="#e5be58" />
            </linearGradient>
          </defs>
          {/* Cuello más lleno y hombros */}
          <path d="M72 165 L72 208 C72 216 46 222 18 236 L182 236 C154 222 128 216 128 208 L128 165 Z" fill="#ece4d6" opacity="0.6" />
          <path d="M74 172 C86 184 114 184 126 172" fill="none" stroke="#d5c8b2" strokeWidth="1.2" />

          {/* Orejas un poco más bajas acordes al rostro redondo */}
          <path d="M36 102 C30 102 26 112 28 122 C30 130 36 134 40 132" fill="#f5ede0" stroke="#bda582" strokeWidth="1.2" />
          <path d="M164 102 C170 102 174 112 172 122 C170 130 164 134 160 132" fill="#f5ede0" stroke="#bda582" strokeWidth="1.2" />

          {/* Cabello con volumen lateral y flequillo redondeado */}
          <path d="M34 94 C28 55 48 22 100 22 C152 22 172 55 166 94 C172 135 158 174 152 182 C146 145 150 105 150 95 C150 48 138 34 100 34 C62 34 50 48 50 95 C50 105 54 145 48 182 C42 174 28 135 34 94 Z" fill="#362f2d" />

          {/* Rostro: Relación 1:1, pómulos llenos, contorno circular sin ángulos */}
          <path d="M100 42 C142 42 162 68 162 110 C162 144 146 170 126 178 C114 183 106 184 100 184 C94 184 86 183 74 178 C54 170 38 144 38 110 C38 68 58 42 100 42 Z" fill="url(#skin-rd)" stroke="#2d2926" strokeWidth="1.5" />

          {/* Línea de cabello circular */}
          <path d="M46 80 C60 54 80 50 100 50 C120 50 140 54 154 80 C138 64 120 60 100 60 C80 60 62 64 46 80 Z" fill="#362f2d" />

          {/* Cejas suaves y curvas */}
          <path d="M58 92 C68 86 78 88 84 92" fill="none" stroke="#2d2926" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M142 92 C132 86 122 88 116 92" fill="none" stroke="#2d2926" strokeWidth="2.2" strokeLinecap="round" />

          {/* Ojos grandes y amigables */}
          <path d="M61 100 Q71 94 81 100 Q71 107 61 100 Z" fill="#ffffff" stroke="#2d2926" strokeWidth="1.2" />
          <circle cx="71" cy="100.5" r="3.4" fill="#2d2926" />
          <circle cx="72.2" cy="99" r="1.1" fill="#ffffff" />
          <path d="M60 98 Q71 92 82 98" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          <path d="M139 100 Q129 94 119 100 Q129 107 139 100 Z" fill="#ffffff" stroke="#2d2926" strokeWidth="1.2" />
          <circle cx="129" cy="100.5" r="3.4" fill="#2d2926" />
          <circle cx="130.2" cy="99" r="1.1" fill="#ffffff" />
          <path d="M140 98 Q129 92 118 98" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          {/* Nariz con puente suave (típico en rostros redondeados de la región) */}
          <path d="M100 92 L98 123 C94 126 92 130 96 132 C99 133 101 133 104 132 C108 130 106 126 102 123" fill="none" stroke="#2d2926" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="94.5" cy="130" r="0.9" fill="#2d2926" />
          <circle cx="105.5" cy="130" r="0.9" fill="#2d2926" />

          {/* Labios curvos */}
          <path d="M85 151 Q93 148 100 150 Q107 148 115 151 Q107 158 100 158 Q93 158 85 151 Z" fill="#d99587" stroke="#2d2926" strokeWidth="1.1" />
          <path d="M87 151 Q100 153 113 151" fill="none" stroke="#2d2926" strokeWidth="1" />
          <path d="M91 156 Q100 164 109 156" fill="none" stroke="#be7868" strokeWidth="1" />

          {/* Barbilla redondeada sin punta */}
          <path d="M93 174 Q100 177 107 174" fill="none" stroke="#c9b69b" strokeWidth="1.4" strokeLinecap="round" />

          {/* Mejillas llenas y sonrosadas (sello del rostro redondo) */}
          <path d="M52 118 C52 128 62 134 72 130" fill="none" stroke="#dfbfa5" strokeWidth="1.6" opacity="0.7" strokeLinecap="round" />
          <path d="M148 118 C148 128 138 134 128 130" fill="none" stroke="#dfbfa5" strokeWidth="1.6" opacity="0.7" strokeLinecap="round" />

          {/* LÍNEA GUÍA GEOMÉTRICA DORADA: Círculo casi perfecto */}
          <circle cx="100" cy="113" r="69" fill="none" stroke="url(#gold-rd)" strokeWidth="1.8" strokeDasharray="5 4" opacity="0.9" />
          <circle cx="100" cy="44" r="3" fill="#c59b27" />
          <circle cx="100" cy="182" r="3" fill="#c59b27" />
          <circle cx="31" cy="113" r="3" fill="#c59b27" />
          <circle cx="169" cy="113" r="3" fill="#c59b27" />
        </svg>
      );

    case "cuadrado":
      return (
        <svg viewBox="0 0 200 240" className="face-shape-portrait" aria-hidden="true">
          <defs>
            <linearGradient id="skin-sq" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdfbf7" />
              <stop offset="100%" stopColor="#eae2d4" />
            </linearGradient>
            <linearGradient id="gold-sq" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c59b27" />
              <stop offset="100%" stopColor="#e5be58" />
            </linearGradient>
          </defs>
          {/* Cuello firme y ancho */}
          <path d="M72 165 L72 208 C72 216 44 222 16 236 L184 236 C156 222 128 216 128 208 L128 165 Z" fill="#ece4d6" opacity="0.6" />
          <path d="M74 172 C86 182 114 182 126 172" fill="none" stroke="#d5c8b2" strokeWidth="1.2" />
          <path d="M88 188 L80 224 M112 188 L120 224" fill="none" stroke="#d5c8b2" strokeWidth="1" opacity="0.6" />

          {/* Orejas firmes */}
          <path d="M38 96 C32 96 28 106 30 116 C32 126 38 130 42 128" fill="#f5ede0" stroke="#bda582" strokeWidth="1.2" />
          <path d="M162 96 C168 96 172 106 170 116 C168 126 162 130 158 128" fill="#f5ede0" stroke="#bda582" strokeWidth="1.2" />

          {/* Cabello estructurado, frente despejada y recta */}
          <path d="M36 82 C34 50 48 20 100 20 C152 20 166 50 164 82 C168 125 158 165 152 175 C146 138 148 100 148 90 C148 42 136 32 100 32 C64 32 52 42 52 90 C52 100 54 138 48 175 C42 165 32 125 36 82 Z" fill="#1f1d1c" />

          {/* Rostro: Frente ancha recta, gonion angular en 90°, mentón ancho */}
          <path d="M48 46 L152 46 C156 70 156 105 154 140 C152 158 146 168 132 176 L118 182 C110 184 90 184 82 182 L68 176 C54 168 48 158 46 140 C44 105 44 70 48 46 Z" fill="url(#skin-sq)" stroke="#2d2926" strokeWidth="1.5" />

          {/* Línea de cabello horizontal y angular */}
          <path d="M48 54 L152 54 L146 68 C132 58 116 58 100 58 C84 58 68 68 54 68 Z" fill="#1f1d1c" />

          {/* Cejas rectas y angulares */}
          <path d="M58 86 L76 84 L84 88" fill="none" stroke="#2d2926" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M142 86 L124 84 L116 88" fill="none" stroke="#2d2926" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />

          {/* Ojos determinados */}
          <path d="M61 96 Q72 90 82 96 Q72 102 61 96 Z" fill="#ffffff" stroke="#2d2926" strokeWidth="1.2" />
          <circle cx="72" cy="96" r="3.2" fill="#2d2926" />
          <circle cx="73.2" cy="94.8" r="1" fill="#ffffff" />
          <path d="M60 94 Q72 88 83 94" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          <path d="M139 96 Q128 90 118 96 Q128 102 139 96 Z" fill="#ffffff" stroke="#2d2926" strokeWidth="1.2" />
          <circle cx="128" cy="96" r="3.2" fill="#2d2926" />
          <circle cx="129.2" cy="94.8" r="1" fill="#ffffff" />
          <path d="M140 94 Q128 88 117 94" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          {/* Nariz recta y definida */}
          <path d="M100 84 L98 120 C95 123 93 126 96 128 C99 129 101 129 104 128 C107 126 105 123 102 120" fill="none" stroke="#2d2926" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="95" cy="126" r="0.9" fill="#2d2926" />
          <circle cx="105" cy="126" r="0.9" fill="#2d2926" />

          {/* Labios firmes y anchos */}
          <path d="M84 148 Q92 145 100 146 Q108 145 116 148 Q108 154 100 154 Q92 154 84 148 Z" fill="#d49484" stroke="#2d2926" strokeWidth="1.1" />
          <path d="M86 148 L114 148" fill="none" stroke="#2d2926" strokeWidth="1" />
          <path d="M90 152 Q100 158 110 152" fill="none" stroke="#be7a6a" strokeWidth="1" />

          {/* Mandíbula fuerte y mentón plano / hoyuelo */}
          <path d="M48 142 L52 160 Q58 168 68 172" fill="none" stroke="#baa58a" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M152 142 L148 160 Q142 168 132 172" fill="none" stroke="#baa58a" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M93 176 L107 176" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          {/* LÍNEA GUÍA GEOMÉTRICA DORADA: Cuadrado angular con esquinas de mandíbula */}
          <path d="M46 44 L154 44 L154 150 L126 182 L74 182 L46 150 Z" fill="none" stroke="url(#gold-sq)" strokeWidth="1.8" strokeDasharray="5 4" opacity="0.9" />
          <circle cx="46" cy="44" r="3" fill="#c59b27" />
          <circle cx="154" cy="44" r="3" fill="#c59b27" />
          <circle cx="154" cy="150" r="3.2" fill="#c59b27" />
          <circle cx="46" cy="150" r="3.2" fill="#c59b27" />
          <circle cx="126" cy="182" r="3" fill="#c59b27" />
          <circle cx="74" cy="182" r="3" fill="#c59b27" />
        </svg>
      );

    case "corazon":
      return (
        <svg viewBox="0 0 200 240" className="face-shape-portrait" aria-hidden="true">
          <defs>
            <linearGradient id="skin-cr" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdfbf7" />
              <stop offset="100%" stopColor="#eae2d5" />
            </linearGradient>
            <linearGradient id="gold-cr" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c59b27" />
              <stop offset="100%" stopColor="#e5be58" />
            </linearGradient>
          </defs>
          {/* Cuello esbelto */}
          <path d="M82 168 L82 208 C82 216 52 222 22 236 L178 236 C148 222 118 216 118 208 L118 168 Z" fill="#ece4d6" opacity="0.6" />
          <path d="M84 174 C92 182 108 182 116 174" fill="none" stroke="#d5c8b2" strokeWidth="1.2" />

          {/* Orejas delicadas */}
          <path d="M42 92 C36 92 32 102 34 112 C36 122 42 126 46 124" fill="#f5ede0" stroke="#bda582" strokeWidth="1.2" />
          <path d="M158 92 C164 92 168 102 166 112 C164 122 158 126 154 124" fill="#f5ede0" stroke="#bda582" strokeWidth="1.2" />

          {/* Cabello con pico de viuda (widow's peak) característico */}
          <path d="M38 80 C32 45 46 18 100 18 C154 18 168 45 162 80 C170 120 156 165 150 178 C144 135 146 95 146 85 C146 38 136 28 100 28 C64 28 54 38 54 85 C54 95 56 135 50 178 C44 165 30 120 38 80 Z" fill="#26211e" />

          {/* Rostro: Frente ancha, pómulos altos, se afina hacia barbilla fina y en punta */}
          <path d="M46 54 C60 38 80 34 100 44 C120 34 140 38 154 54 C160 85 152 118 134 146 C120 168 108 184 100 190 C92 184 80 168 66 146 C48 118 40 85 46 54 Z" fill="url(#skin-cr)" stroke="#2d2926" strokeWidth="1.5" />

          {/* Nacimiento del cabello con pico de viuda */}
          <path d="M48 64 C64 48 84 48 100 58 C116 48 136 48 152 64 C136 54 118 52 100 64 C82 52 64 54 48 64 Z" fill="#26211e" />

          {/* Cejas arqueadas elegantes */}
          <path d="M58 84 C68 76 80 78 86 84" fill="none" stroke="#2d2926" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M142 84 C132 76 120 78 114 84" fill="none" stroke="#2d2926" strokeWidth="2.2" strokeLinecap="round" />

          {/* Ojos rasgados y expresivos */}
          <path d="M62 94 Q72 88 82 94 Q72 100 62 94 Z" fill="#ffffff" stroke="#2d2926" strokeWidth="1.2" />
          <circle cx="72" cy="94" r="3.2" fill="#2d2926" />
          <circle cx="73.2" cy="92.8" r="1" fill="#ffffff" />
          <path d="M61 92 Q72 86 83 92" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          <path d="M138 94 Q128 88 118 94 Q128 100 138 94 Z" fill="#ffffff" stroke="#2d2926" strokeWidth="1.2" />
          <circle cx="128" cy="94" r="3.2" fill="#2d2926" />
          <circle cx="129.2" cy="92.8" r="1" fill="#ffffff" />
          <path d="M139 92 Q128 86 117 92" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          {/* Nariz fina y estilizada */}
          <path d="M100 82 L98 120 C95 123 94 126 97 127 C99 128 101 128 103 127 C106 126 105 123 102 120" fill="none" stroke="#2d2926" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="96" cy="125.5" r="0.8" fill="#2d2926" />
          <circle cx="104" cy="125.5" r="0.8" fill="#2d2926" />

          {/* Labios delicados */}
          <path d="M87 148 Q93 144 100 146 Q107 144 113 148 Q107 154 100 154 Q93 154 87 148 Z" fill="#dc9486" stroke="#2d2926" strokeWidth="1.1" />
          <path d="M89 148 Q100 150 111 148" fill="none" stroke="#2d2926" strokeWidth="1" />
          <path d="M93 153 Q100 159 107 153" fill="none" stroke="#c07869" strokeWidth="1" />

          {/* Barbilla en punta fina (sello distintivo de corazón) */}
          <path d="M97 182 Q100 185 103 182" fill="none" stroke="#2d2926" strokeWidth="1.3" strokeLinecap="round" />

          {/* Pómulos altos marcados */}
          <path d="M54 110 Q62 116 70 112" fill="none" stroke="#dfbda4" strokeWidth="1.4" opacity="0.6" strokeLinecap="round" />
          <path d="M146 110 Q138 116 130 112" fill="none" stroke="#dfbda4" strokeWidth="1.4" opacity="0.6" strokeLinecap="round" />

          {/* LÍNEA GUÍA GEOMÉTRICA DORADA: Triángulo invertido con base superior */}
          <path d="M46 54 L154 54 L100 190 Z" fill="none" stroke="url(#gold-cr)" strokeWidth="1.8" strokeDasharray="5 4" opacity="0.9" />
          <circle cx="46" cy="54" r="3.2" fill="#c59b27" />
          <circle cx="154" cy="54" r="3.2" fill="#c59b27" />
          <circle cx="100" cy="190" r="3.2" fill="#c59b27" />
          <circle cx="100" cy="54" r="2.5" fill="#c59b27" />
        </svg>
      );

    case "diamante":
      return (
        <svg viewBox="0 0 200 240" className="face-shape-portrait" aria-hidden="true">
          <defs>
            <linearGradient id="skin-dm" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdfbf7" />
              <stop offset="100%" stopColor="#eae2d4" />
            </linearGradient>
            <linearGradient id="gold-dm" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c59b27" />
              <stop offset="100%" stopColor="#e5be58" />
            </linearGradient>
          </defs>
          {/* Cuello estilizado */}
          <path d="M80 166 L80 208 C80 216 52 222 22 236 L178 236 C148 222 120 216 120 208 L120 166 Z" fill="#ece4d6" opacity="0.6" />
          <path d="M82 172 C90 180 110 180 118 172" fill="none" stroke="#d5c8b2" strokeWidth="1.2" />

          {/* Orejas */}
          <path d="M44 98 C38 98 34 108 36 118 C38 126 44 130 48 128" fill="#f5ede0" stroke="#bda582" strokeWidth="1.2" />
          <path d="M156 98 C162 98 166 108 164 118 C162 126 156 130 152 128" fill="#f5ede0" stroke="#bda582" strokeWidth="1.2" />

          {/* Cabello recogido / peinado hacia atrás para lucir los pómulos */}
          <path d="M48 85 C42 48 54 20 100 20 C146 20 158 48 152 85 C164 125 152 165 146 178 C142 135 144 95 144 85 C144 38 134 28 100 28 C66 28 56 38 56 85 C56 95 58 135 54 178 C48 165 36 125 48 85 Z" fill="#2d2522" />

          {/* Rostro: Frente estrecha, PÓMULOS MUY ANCHOS (punto máximo), se afina hacia barbilla fina */}
          <path d="M72 40 C84 36 116 36 128 40 C142 46 154 68 166 104 C158 138 140 162 120 176 C110 184 104 186 100 186 C96 186 90 184 80 176 C60 162 42 138 34 104 C46 68 58 46 72 40 Z" fill="url(#skin-dm)" stroke="#2d2926" strokeWidth="1.5" />

          {/* Frente estrecha delimitada por el cabello */}
          <path d="M72 48 C84 42 116 42 128 48 C122 58 112 60 100 60 C88 60 78 58 72 48 Z" fill="#2d2522" />

          {/* Cejas angulares que acompañan los pómulos */}
          <path d="M62 86 C70 80 80 82 85 87" fill="none" stroke="#2d2926" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M138 86 C130 80 120 82 115 87" fill="none" stroke="#2d2926" strokeWidth="2.2" strokeLinecap="round" />

          {/* Ojos felinos / dramáticos */}
          <path d="M64 96 Q73 90 83 96 Q73 101 64 96 Z" fill="#ffffff" stroke="#2d2926" strokeWidth="1.2" />
          <circle cx="73" cy="96" r="3.1" fill="#2d2926" />
          <circle cx="74.2" cy="94.8" r="1" fill="#ffffff" />
          <path d="M63 94 Q73 88 84 94" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          <path d="M136 96 Q127 90 117 96 Q127 101 136 96 Z" fill="#ffffff" stroke="#2d2926" strokeWidth="1.2" />
          <circle cx="127" cy="96" r="3.1" fill="#2d2926" />
          <circle cx="128.2" cy="94.8" r="1" fill="#ffffff" />
          <path d="M137 94 Q127 88 116 94" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          {/* Nariz esbelta */}
          <path d="M100 84 L98 121 C95 124 93 127 96 128 C99 129 101 129 104 128 C107 127 105 124 102 121" fill="none" stroke="#2d2926" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="95.5" cy="126.5" r="0.8" fill="#2d2926" />
          <circle cx="104.5" cy="126.5" r="0.8" fill="#2d2926" />

          {/* Labios definidos */}
          <path d="M86 148 Q93 145 100 147 Q107 145 114 148 Q107 154 100 154 Q93 154 86 148 Z" fill="#d79284" stroke="#2d2926" strokeWidth="1.1" />
          <path d="M88 148 Q100 150 112 148" fill="none" stroke="#2d2926" strokeWidth="1" />
          <path d="M92 153 Q100 159 108 153" fill="none" stroke="#bd7768" strokeWidth="1" />

          {/* Barbilla fina */}
          <path d="M96 176 Q100 178 104 176" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          {/* PÓMULOS MUY PROMINENTES: Líneas de relieve en el punto más ancho */}
          <path d="M38 104 C46 114 56 120 68 114" fill="none" stroke="#baa285" strokeWidth="1.6" opacity="0.85" strokeLinecap="round" />
          <path d="M162 104 C154 114 144 120 132 114" fill="none" stroke="#baa285" strokeWidth="1.6" opacity="0.85" strokeLinecap="round" />

          {/* LÍNEA GUÍA GEOMÉTRICA DORADA: Rombo real (frente angosta, pómulos máximos, mentón angosto) */}
          <path d="M100 38 L166 104 L100 186 L34 104 Z" fill="none" stroke="url(#gold-dm)" strokeWidth="1.8" strokeDasharray="5 4" opacity="0.9" />
          <circle cx="100" cy="38" r="3" fill="#c59b27" />
          <circle cx="166" cy="104" r="3.4" fill="#c59b27" />
          <circle cx="100" cy="186" r="3" fill="#c59b27" />
          <circle cx="34" cy="104" r="3.4" fill="#c59b27" />
        </svg>
      );

    case "alargado":
      return (
        <svg viewBox="0 0 200 240" className="face-shape-portrait" aria-hidden="true">
          <defs>
            <linearGradient id="skin-al" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdfbf7" />
              <stop offset="100%" stopColor="#ebe4d6" />
            </linearGradient>
            <linearGradient id="gold-al" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c59b27" />
              <stop offset="100%" stopColor="#e5be58" />
            </linearGradient>
          </defs>
          {/* Cuello largo y esbelto */}
          <path d="M78 178 L78 214 C78 220 50 226 20 238 L180 238 C150 226 122 220 122 214 L122 178 Z" fill="#ece4d6" opacity="0.6" />
          <path d="M80 185 C88 194 112 194 120 185" fill="none" stroke="#d5c8b2" strokeWidth="1.2" />

          {/* Orejas proporcionadas a lo largo de la cara */}
          <path d="M46 102 C40 102 36 114 38 126 C40 136 46 140 50 138" fill="#f5ede0" stroke="#bda582" strokeWidth="1.2" />
          <path d="M154 102 C160 102 164 114 162 126 C160 136 154 140 150 138" fill="#f5ede0" stroke="#bda582" strokeWidth="1.2" />

          {/* Cabello con frente alta despejada */}
          <path d="M46 75 C42 38 52 14 100 14 C148 14 158 38 154 75 C160 125 152 175 146 188 C142 140 144 100 144 88 C144 34 136 24 100 24 C64 24 56 34 56 88 C56 100 58 140 54 188 C48 175 40 125 46 75 Z" fill="#2b2623" />

          {/* Rostro: Relación > 1.6:1, líneas laterales verticales paralelas, frente alta */}
          <path d="M54 44 C66 32 134 32 146 44 C154 75 152 125 150 160 C146 184 136 196 118 202 C108 205 92 205 82 202 C64 196 54 184 50 160 C48 125 46 75 54 44 Z" fill="url(#skin-al)" stroke="#2d2926" strokeWidth="1.5" />

          {/* Nacimiento alto del cabello */}
          <path d="M54 52 C70 42 130 42 146 52 C134 46 118 46 100 46 C82 46 66 46 54 52 Z" fill="#2b2623" />

          {/* Cejas más bajas por frente amplia */}
          <path d="M62 92 C72 86 82 88 87 93" fill="none" stroke="#2d2926" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M138 92 C128 86 118 88 113 93" fill="none" stroke="#2d2926" strokeWidth="2.2" strokeLinecap="round" />

          {/* Ojos equilibrados */}
          <path d="M64 102 Q74 96 84 102 Q74 108 64 102 Z" fill="#ffffff" stroke="#2d2926" strokeWidth="1.2" />
          <circle cx="74" cy="102" r="3.2" fill="#2d2926" />
          <circle cx="75.2" cy="100.8" r="1" fill="#ffffff" />
          <path d="M63 100 Q74 94 85 100" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          <path d="M136 102 Q126 96 116 102 Q126 108 136 102 Z" fill="#ffffff" stroke="#2d2926" strokeWidth="1.2" />
          <circle cx="126" cy="102" r="3.2" fill="#2d2926" />
          <circle cx="127.2" cy="100.8" r="1" fill="#ffffff" />
          <path d="M137 100 Q126 94 115 100" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          {/* Nariz con mayor longitud vertical */}
          <path d="M100 90 L98 134 C95 137 93 140 96 142 C99 143 101 143 104 142 C107 140 105 137 102 134" fill="none" stroke="#2d2926" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="95" cy="140" r="0.9" fill="#2d2926" />
          <circle cx="105" cy="140" r="0.9" fill="#2d2926" />

          {/* Labios */}
          <path d="M85 162 Q92 159 100 161 Q108 159 115 162 Q108 168 100 168 Q92 168 85 162 Z" fill="#d99587" stroke="#2d2926" strokeWidth="1.1" />
          <path d="M87 162 Q100 164 113 162" fill="none" stroke="#2d2926" strokeWidth="1" />
          <path d="M91 167 Q100 173 109 167" fill="none" stroke="#be7868" strokeWidth="1" />

          {/* Mentón con longitud */}
          <path d="M94 190 Q100 193 106 190" fill="none" stroke="#2d2926" strokeWidth="1.2" strokeLinecap="round" />

          {/* Líneas suaves en las mejillas estilizadas */}
          <path d="M60 126 L64 146" fill="none" stroke="#dfcbb6" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />
          <path d="M140 126 L136 146" fill="none" stroke="#dfcbb6" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />

          {/* LÍNEA GUÍA GEOMÉTRICA DORADA: Rectángulo alargado con esquinas suaves */}
          <rect x="50" y="36" width="100" height="168" rx="28" fill="none" stroke="url(#gold-al)" strokeWidth="1.8" strokeDasharray="5 4" opacity="0.9" />
          <circle cx="50" cy="36" r="3" fill="#c59b27" />
          <circle cx="150" cy="36" r="3" fill="#c59b27" />
          <circle cx="150" cy="204" r="3" fill="#c59b27" />
          <circle cx="50" cy="204" r="3" fill="#c59b27" />
        </svg>
      );
  }
}
