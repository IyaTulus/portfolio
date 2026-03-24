import React, { useEffect, useRef } from 'react';

const NUM_PARTICLES = 14; // Panjang ekor komet

const CursorGlow: React.FC = () => {
    // Array refs untuk setiap partikel ekor
    const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
    
    // Menyimpan posisi; indeks 0 (kepala komet) mengejar kursor, sisanya (ekor) saling mengikuti
    // 100% menggunakan hooks referensi DOM untuk menghindari React Re-render dan menjamin 60fps+
    const pos = useRef(Array.from({ length: NUM_PARTICLES }, () => ({ x: 0, y: 0 })));

    useEffect(() => {
        let animationFrameId: number;
        let targetX = 0;
        let targetY = 0;
        let isFirstMove = true;
        let isVisible = false;

        const handleMouseMove = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
            
            if (isFirstMove) {
                // Sentak langsung seluruh partikel ke posisi awal kursor tanpa animasi terbang dari origin (0,0)
                for (let i = 0; i < NUM_PARTICLES; i++) {
                     pos.current[i].x = targetX;
                     pos.current[i].y = targetY;
                }
                isFirstMove = false;
            }

            if (!isVisible) {
                 isVisible = true;
                 dotsRef.current.forEach(el => {
                     if (el) el.style.opacity = '1';
                 });
            }
        };

        const handleMouseLeave = () => {
            isVisible = false;
            isFirstMove = true;
            dotsRef.current.forEach(el => {
                 if (el) el.style.opacity = '0';
            });
        };

        const animate = () => {
            // Kepala Komet (Indeks 0) menempel tepat di kursor 100% instan agar pas
            pos.current[0].x = targetX;
            pos.current[0].y = targetY;

            // Sisa ekor mengikuti potongan ekor persis di depannya secara smooth (lerp 25%)
            for (let i = 1; i < NUM_PARTICLES; i++) {
                pos.current[i].x += (pos.current[i - 1].x - pos.current[i].x) * 0.25;
                pos.current[i].y += (pos.current[i - 1].y - pos.current[i].y) * 0.25;
            }

            // Menerapkan array posisi fisika menjadi Transform elemen GPU
            for (let i = 0; i < NUM_PARTICLES; i++) {
                const el = dotsRef.current[i];
                if (el) {
                    const size = 180 - (i * 12); // Pengecilan diameter radius tajam
                    const offset = size / 2;
                    el.style.transform = `translate(${pos.current[i].x - offset}px, ${pos.current[i].y - offset}px)`;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.body.addEventListener('mouseleave', handleMouseLeave);
        
        animate(); // Memulai rekursi 60fps

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0 hidden md:block overflow-hidden mix-blend-screen">
            {Array.from({ length: NUM_PARTICLES }).map((_, i) => {
                const size = 180 - (i * 12); // Kepala 180px, ujung ekor proporsional mengecil
                const intensity = i === 0 ? 0.12 : 0.06 * (1 - (i / NUM_PARTICLES)); // Opasitas natural dinaikkan sedikit karena diameter lebih kecil
                
                return (
                    <div
                        key={i}
                        ref={el => { dotsRef.current[i] = el; }}
                        className="absolute top-0 left-0 rounded-full transition-opacity duration-1000 ease-in-out opacity-0"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            background: `radial-gradient(circle, rgba(0,255,238,${intensity}) 0%, rgba(0,255,238,0) 65%)`,
                            // Memaksa Hardware GPU memperlakukan ini layaknya layer native terpisah
                            willChange: 'transform, opacity' 
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default CursorGlow;
