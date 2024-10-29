<!-- For best results, preview this in either the full-width or full-screen preview modes. -->

<script>
    import { base } from '$app/paths';

    const navigateToAbout = () => {
    window.location.href = `${base}/Aboutme`;  };

    const navigateToHome = () => {
    window.location.href = `${base}/`;
  };
  </script>
  
  <div class="grid grid-rows-[auto_1fr_auto]">
      <!-- Header -->
      <header class= "p-4">
          <div class="flex space-x-4">
              <button on:click={navigateToHome} class="btn font-mono font-bold">Home</button>
              <button on:click={navigateToAbout} class="btn font-mono">
                <a href="{base}/Aboutme">About me</a>
              </button>
              <button class="btn font-mono">
                  <a href="{base}/Publication">Publication</a>
              </button>
              <button class="btn font-mono">Activity</button>
              <button class="btn font-mono">Life map</button>
          </div>
      </header>
  
      <!-- Page -->
      <div class="container mx-auto grid grid-cols-1 xl:grid-cols-[200px_minmax(0px,_1fr)_200px]">
        
        <!-- Sidebar (Left) -->
        <!-- NOTE: hidden in smaller screen sizes -->
        <aside class="sticky top-0 col-span-1 hidden h-screen p-4 xl:block"> </aside>
        <!-- Main -->
        <main class="col-span-1 space-y-4 bg-white p-4">
          <div class="h-[500px] bg-white p-4 flex justify-center items-center">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <div style="display: flex; flex-direction: column; align-items: center;">
              <div>
                  <img src="yitongxia.jpg" alt="Image" style="border-radius: 50%; width: 200px; height: 200px; object-fit: cover;" />
              </div>
  
              <div style="margin-top: 20px;" class='font-bold font-mono text-lg'>
                  Yitong Xia
              </div>
              <div style="margin-top: 20px;" class='typewriter font-mono text-center'>
                Hey, I am Yitong.
          </div>
              <div style="margin-top: 20px;" class='typewriter2 font-mono text-center'>
                  I am a PhD candidate at the <a href="https://soc.kuleuven.be/io/english" style="color:#1FABD5">Public Governance Institute</a> 
                  and the <a href="https://ees.kuleuven.be/en/geography" style="color:#1FABD5">Division of Geography and Tourism</a> 
                  at <a href="https://www.kuleuven.be/english/kuleuven/" style="color:#1FABD5">KU Leuven</a>.
            </div>
          </div>
  
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
      animation: fadeIn 0.1s forwards, typing 2.5s steps(30, end) forwards, blink-caret 0.4s step-end 2;
  
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