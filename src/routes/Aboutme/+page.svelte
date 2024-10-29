<!-- For best results, preview this in either the full-width or full-screen preview modes. -->

<script>
  import { base } from '$app/paths';
  const navigateToAbout = () => {
  window.location.href = `${base}/Aboutme`;
  };

  const navigateToHome = () => {
  window.location.href = `${base}/`;
  };
  const navigateToPublication = () => {
  window.location.href = `${base}/Publication`;
  };

  const navigateToActivity = () => {
  window.location.href = `${base}/Activity`;
  };

  const navigateToLifeMap = () => {
  window.location.href = `${base}/LifeMap`;
  };  
</script>
  
  <div class="grid grid-rows-[auto_1fr_auto]">
      <!-- Header -->
      <header class= "p-4">
        <div class="flex space-x-4">
            <button on:click={navigateToHome} class="btn font-mono">Home</button>
            <button on:click={navigateToAbout} class="btn font-mono  font-bold">
              <a href="{base}/Aboutme">About me</a>
            </button>
            <button on:click={navigateToPublication} class="btn font-mono">
                <a href="{base}/Publication">Publication</a>
            </button>
            <button on:click={navigateToActivity} class="btn font-mono">Activity</button>
            <button on:click={navigateToLifeMap} class="btn font-mono">Life map</button>
        </div>
    </header>
  
      <!-- Page -->
      <div class="container mx-auto grid grid-cols-1 xl:grid-cols-[200px_minmax(0px,_1fr)_200px]">
        
        <!-- Sidebar (Left) -->
        <!-- NOTE: hidden in smaller screen sizes -->
        <aside class="sticky top-0 col-span-1 hidden h-screen p-4 xl:block bg-white"> </aside>
        <!-- Main -->
        <main class="col-span-1 space-y-4 bg-white p-4">
          <div class="min-h-[300px] bg-white p-4 font-mono">
            <p class="pt-3 pl-3 pb-3 text-lg font-bold bg-blue-100">Current Position:</p>
            <p class="pt-7 pl-3 pb-3 text-md">
              I am a PhD candidate at the Public Governance Institute and the Division of Geography and Tourism at KU Leuven, Belgium.
              I am currently engaging in an FWO-funded project "Mapping Polycentric Urban Development" where I mainly focus on developing scientific geocomputational tools to analyse and map urban polycentricity. 
              <br/><br/>
              I also have a strong interest in programming and the development of open-source geographical software. I care about the open-source nature of software and data, and I am a strong advocate for open science.
              I am dedicated to exploring new possibilities within the fields of GIS and human geography through my programming skills.
            </p>
          </div>
  
          <div class="min-h-[300px] bg-white p-4 font-mono">
            <p class="pt-3 pl-3 pb-3 text-lg font-bold bg-blue-100">Research interests:</p>
            <p class="pt-7 pl-3 pb-3 text-md">During my PhD journey, I mainly focus on:</p>
            <ul>
              <li>
                <p class="pt-3 pl-3 text-md"> - Urban Polycentricity/Polycentric Urban Regions</p>
              </li>
              <li>
                <p class="pt-3 pl-3 text-md"> - Urban studies</p>
              </li>
              <li>
                <p class="pt-3 pl-3 text-md"> - WebGIS development</p>
              </li>
              <li>
                <p class="pt-3 pl-3 text-md"> - Open-source tool-building</p>
              </li>
          </div>
  
          <div class="min-h-[300px] bg-white p-4 font-mono">
            <p class="pt-3 pl-3 pb-3 text-lg font-bold bg-blue-100">Education:</p>
            <ul>
              <li>
                <p class="pt-7 pl-3 pb-3 text-md">- PhD in Social Sciences & Human Geography, <a href="https://www.kuleuven.be/english/kuleuven/">KU Leuven</a>, BE (2023-present)</p>
              </li>
              <li>
                <p class="pt-3 pl-3 pb-3 text-md">- <a href="https://www.tudelft.nl/onderwijs/opleidingen/masters/gm/msc-geomatics">MSc in Geomatics for the Built Environment</a>, <a href="https://www.tudelft.nl/">Delft University of Technology</a>, NL (2021-2023)</p>
                <p class="pl-10 text-sm">3D modelling for the built environment, Photogrammetry and 3D computer vision, Digital terrain modelling.</p>
              </li>
              <li>
                <p class="pt-7 pl-3 pb-3 text-md">- BSc in Geographical Information Sciences, Central China Normal University, CN (2017-2021)</p>
                <p class="pl-10 text-sm">Geographical information science, Cartography</p>
            </ul>
          </div>

          <div class="min-h-[300px] bg-white p-4 font-mono">
            <p class="pt-3 pl-3 pb-3 text-lg font-bold bg-blue-100">Get in touch:</p>
            <p class="pt-7 pl-3 pb-3 text-md">Please feel free to contact me if you have any ideas for collaboration or would like to engage in discussions. 
              My interests include a broad spectrum of urban and regional studies, urban polycentricity, open-source geocomputational tool-building.<br/><br/>
              I am always open to new ideas and collaborations. Looking forward to connecting and hearing from you!</p>
          </div>
          
        </main>
        <!-- Sidebar (Right) -->
        <!-- NOTE: hidden in smaller screen sizes -->
        <aside class="sticky top-0 col-span-1 hidden h-screen bg-white p-4 xl:block"> </aside>
      </div>
    </div>
    
    <style>
      /* Add this CSS */
      .typewriter {
      
      opacity: 0; /* Hide the text */
      overflow: hidden; /* Ensures the text doesn’t overflow */
      white-space: nowrap; /* Keeps text on one line */
      border-right: 2px solid; /* Creates the cursor */
      animation: fadeIn 0.1s forwards 0.1s, typing 3s steps(30, end) 0.1s forwards, blink-caret 0.5s step-end 3 0.1s;
  }
      .typewriter2 {
        opacity: 0; /* Hide the text */
      overflow: hidden; /* Ensures the text doesn’t overflow */
      white-space: nowrap; /* Keeps text on one line */
      border-right: 2px solid; /* Creates the cursor */
      animation: fadeIn 0.1s forwards 1s, typing 3s steps(30, end) 1s forwards, blink-caret 0.5s step-end 20 1s;
  }
  
  
    @keyframes fadeIn {
      to {
          opacity: 1; /* Fade in text after 1s */
      }
    
    }
  
      @keyframes typing {
      from {
          width: 0;
      }
      to {
          width: 100%;
          border-right: none; /* Removes the cursor */
      }
    }
  
    @keyframes blink-caret {
      from,
      to {
          border-color: transparent;
      }
      50% {
          border-color: black;
      }
    }
  
    </style>