function LandingIntro() {

    return (
        <div className="hero min-h-full rounded-l-xl bg-base-200">
            <div className="hero-content py-12">
                <div className="text-center mt-12">
                    <img className={''} src={'./intro.png'} alt={'landing image of intro'}/>
                </div>
                <div className="text-center">
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-24 rounded-full">
                            <span className="text-6xl">K</span>
                        </div>
                    </div>
                    <p className={'text-3xl'}>KnowledgeCube</p>
                </div>
            </div>
        </div>
    )

}

export default LandingIntro