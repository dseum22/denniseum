import React from 'react';

const Home = () => {
    const fn = {
        fontSize: '15vw'
    }
    const ln = {
        fontSize: '20vw'
    }
    const st = {
        fontSize: '5vw'
    }
    return (
        <>
            <div className='hidden lg:block'>
                <div className='flex justify-between'>
                    <h1 className='text-name text-gray-500 ml-5' style={fn}>DENNIS</h1>
                    <div className='mt-12 ml-16 pl-8 w-full rounded-lg text-7xl leading-relaxed' style={st}>
                        <h2 className='ml-12'>based</h2>
                        <div className='flex'>
                            <h2>in</h2><h2 className='tracking-widest ml-12'>MN</h2>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='ml-16 pl-16 w-full rounded-lg relative -top-10 text-7xl leading-relaxed' style={st}>
                        <h2>student</h2>
                        <h2 className='ml-16'>programmer</h2>
                        <h2 className='ml-8'>cellist</h2>
                    </div>
                    <h1 className='text-name text-gray-700' style={ln}>EUM</h1>
                </div>
            </div>
            <div className='lg:hidden text-center'>
                    <h1 className='text-name text-gray-500' style={fn}>DENNIS</h1>
                    <h1 className='text-name text-gray-700' style={fn}>EUM</h1>
                    <h2 className='w-9/12 leading-relaxed mt-6 mx-auto mb-5' style={st}>student, programmer, and cellist based in MN</h2>
            </div>
        </>
    )
}

export default Home
