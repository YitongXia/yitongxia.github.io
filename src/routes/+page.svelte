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
    window.location.href = `${base}/Map`;
  };
  </script>
  
  <div class="grid grid-rows-[auto_1fr_auto]">
      <!-- Header -->
      <header class= "p-4">
          <div class="flex space-x-4">
              <button on:click={navigateToHome} class="hover-effect btn font-mono font-bold">Home</button>
              <button on:click={navigateToAbout} class="hover-effect btn font-mono">
                <a href="{base}/Aboutme">About me</a>
              </button>
              <button on:click={navigateToPublication} class="hover-effect btn font-mono">
                  <a href="{base}/Publication">Publication</a>
              </button>
              <button on:click={navigateToActivity} class="hover-effect btn font-mono">Activity</button>
              <button on:click={navigateToLifeMap} class="hover-effect btn font-mono">Life map</button>
          </div>
      </header>
  
      <!-- Page -->
      <div class="container mx-auto grid grid-cols-1 xl:grid-cols-[200px_minmax(0px,_1fr)_200px] font-mono">
        
        <!-- Sidebar (Left) -->
        <!-- NOTE: hidden in smaller screen sizes -->
        <aside class="sticky top-0 col-span-1 hidden h-screen p-4 xl:block"> </aside>
        <!-- Main -->
        <main class="col-span-1 space-y-4 bg-white p-4">
          <div class="h-[800px] bg-white p-4 flex justify-center items-center">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <div style="display: flex; flex-direction: column; align-items: center;">
              <div>
                  <img src="yitongxia.jpg" alt="Image" style="border-radius: 50%; width: 200px; height: 200px; object-fit: cover;" />
              </div>
  
              <div style="margin-top: 20px;" class='font-bold font-mono text-lg'>
                  Yitong Xia
              </div>
              <div style="margin-top: 20px;" class=' font-mono text-center'>
                Hey, I am Yitong.
              </div>
                
                <div style="margin-top: 20px;" class='font-mono text-center'>
                  I am a PhD candidate at the <a href="https://soc.kuleuven.be/io/english" class="text-blue-500">Public Governance Institute</a> 
                  and the <a href="https://ees.kuleuven.be/en/geography" class="text-blue-500">Division of Geography and Tourism</a> 
                  at <a href="https://www.kuleuven.be/english/kuleuven/" class="text-blue-500">KU Leuven</a>.
            
                </div>
                <div class="pt-20">
                  yitong.xia@kuleuven.be
                </div>
                <div class="pt-5">
                  <a href="https://www.kuleuven.be/english/kuleuven/" target="_blank" ><img src="KULeuven.png" alt="" style="height: 40px;"></a>
                </div>
          </div>
        </div>
        </main>
        <!-- Sidebar (Right) -->
        <!-- NOTE: hidden in smaller screen sizes -->
        <aside class="sticky top-0 col-span-1 hidden h-screen bg-white p-4 xl:block"> </aside>
      </div>
    </div>
    