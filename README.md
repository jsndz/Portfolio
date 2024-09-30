#main {
height: 60vh;
width: 70%;
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
line-height: 130px;
padding-top: 50px;
}

#ipic {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -81%);
}

#name {
font-size: 150px;
font-weight: 800;
}

#flip {
display: flex;
justify-content: flex-end;
}

#cta {
width: 100%;
height: 1vh;
}
#cta {
width: 100%;
height: 1vh;
}

<div>
        <div className=" bg-yellow-500 ">
          <div className="bg-zinc-500" id="ipic">
            <Image src="/file.png" alt="my pic" width="700" height="700" />
          </div>
          <div id="ME" className="bg-red-700  ">
            <h3 className="text-6xl font-Montserrat text-[#DEDEDE]">
              Hello, I am
            </h3>
            <h1
              id="name"
              className="font-Montserrat z-50 text-white tracking-tighter"
            >
              JAISON DSOUZA
            </h1>
          </div>
        </div>
        <div id="flip" className=" bg-lime-500">
          <FlipWords
            words={words}
            className="text-6xl font-nixie text-[#DEDEDE]"
          ></FlipWords>
        </div>
      </div>
      <div id="cta">
        <h3 className="text-[#DEDEDE]  bg-rose-600" id="work">
          Curious About My Work?
        </h3>
        <div className=" bg-slate-500 flex">
          <Image src={ArrowIcon} alt="arrow" width="20" height="20" />
          <h3 className="pt-1 text-white">scroll down</h3>
        </div>
      </div>
