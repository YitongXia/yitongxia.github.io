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
            <button on:click={navigateToHome} class="hover-effect btn font-mono">Home</button>
            <button on:click={navigateToAbout} class="hover-effect btn font-mono">
              <a href="{base}/Aboutme">About me</a>
            </button>
            <button on:click={navigateToPublication} class="hover-effect btn font-mono">
                <a href="{base}/Publication">Publication</a>
            </button>
            <button on:click={navigateToActivity} class="hover-effect btn font-mono font-bold">Activity</button>
            <button on:click={navigateToLifeMap} class="hover-effect btn font-mono">Life map</button>
        </div>
    </header>
  
      <!-- Page -->
      <div class="container mx-auto grid grid-cols-1 xl:grid-cols-[200px_minmax(0px,_1fr)_200px]">
        
        <!-- Sidebar (Left) -->
        <!-- NOTE: hidden in smaller screen sizes -->
        <aside class="sticky top-0 col-span-1 hidden h-screen p-4 xl:block bg-white"> </aside>
        <!-- Main -->
        <main class="col-span-1 space-y-4 bg-white p-4">
          <div class="min-h-[600px] bg-white p-4 font-mono">
            <p class="pt-3 pl-3 pb-3 text-lg font-bold bg-blue-100">Presentations and talks:</p>
            <div>
              <div class="pt-10 pb-3 pl-3 text-lg font-bold">
                <a href="https://ersa.org/events/63rd-ersa-congress/" target="_blank" class="text-blue-500">
                  63rd ERSA Congress: Regional Science Dialogues for Peace and Sustainable Development</a>
              </div>
              <div class="pb-5 pl-3 text-md text-gray-500">
                26-30 August, 2024, Terceira Island, Azores, Portugal 
              </div>
              <div class="pl-3 text-md">
                In this congress, Dr. Freke Caset presented our research:
                <p class="font-bold">"The right tools for the right questions? Probing the role of an open computational geographic tool in urban polycentricity research".</p>
              </div>
              <!-- <img src="ERSA.jpg" alt="ERSA" style="height: 300px"/> -->
            </div>

            <div>
              <div class="pt-10 pb-3 pl-3 text-lg font-bold">
                <a href="https://www.3dgeoinfo.org/3dgeoinfo/" target="_blank" class="text-blue-500">
                  International 3D GeoInfo conference (2023)</a>
              </div>
              <div class="pb-5 pl-3 text-md text-gray-500">
                12-14 September, 2023, Munich, Germany 
              </div>
              <div class="pl-3 text-md">
                In this conference, Dr. Hugo Ledoux presented our research:
                <p class="font-bold">"cjdb: A Simple, Fast, and Lean Database Solution for the CityGML Data Model".</p>       
              </div>
            </div>
          </div>

          
        </main>
        <!-- Sidebar (Right) -->
        <!-- NOTE: hidden in smaller screen sizes -->
        <aside class="sticky top-0 col-span-1 hidden h-screen bg-white p-4 xl:block"> </aside>
      </div>
    </div>
    