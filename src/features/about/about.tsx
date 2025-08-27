import useDescAbout from '../../hooks/descAbout/useDescAbout';
import useAbout from '../../hooks/about/useAbout';
import DOMPurify from 'dompurify';
import { Icon } from '@iconify/react';

const About: React.FC = () => {
    const { descAbout } = useDescAbout();
    const { about } = useAbout();

    return (
        <div className="px-5 md:px-16 py-10" id="about">
            <h1 className='flex text-[2rem] md:text-[4rem] tracking-wider font-bold w-[11rem] md:w-[45rem] text-[#088395]'>About Me</h1>
            <span className='flex text-[1rem] md:text-[2rem] tracking-wider font-light text-[#088395]'>What i offer</span>
            <div className='flex flex-col md:flex-row md:gap-10'>
                {descAbout.map((item) => (
                    <div
                        key={item.id}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.deskripsi) }}
                        className='text-justify mt-5 flex flex-col gap-2 text-slate-700 w-full'
                    />
                ))}
                <div className='w-full md:px-15 justify-center items-center'>
                    {about.map((item) => (
                        <div key={item.id} className='mt-5 flex gap-2 text-slate-700 bg-gradient-to-r from-[#EBF4F6] via-[#37B7C3] to-[#088395] rounded-br-lg rounded-tl-lg'>
                            <div className='flex justify-center items-center bg-white rounded-r-full p-3'>
                                <Icon icon={item.icon} className='text-[#37B7C3] text-[35px] md:text-[40px] mr-2' />
                            </div>
                            <div className='flex justify-center items-center p-3 text-white'>
                                <h1>
                                    <span className='font-semibold'>{item.title}</span><span className='mx-3'>-</span><span className='font-light'>{item.description}</span>
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About;