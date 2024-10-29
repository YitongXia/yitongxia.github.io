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
            <button on:click={navigateToAbout} class="btn font-mono">
              <a href="{base}/Aboutme">About me</a>
            </button>
            <button on:click={navigateToPublication} class="btn font-mono font-bold">
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
            <p class="pt-3 pl-3 pb-3 text-lg font-bold bg-blue-100">Publications:</p>
            <p class="pt-10 pl-3 pb-3 text-lg text-blue-500 font-bold">
              cjdb: A Simple, Fast, and Lean Database Solution for the CityGML Data Model
            </p>
            <div class="pl-3 pb-3 text-md"> Published on Recent Advances in 3D Geoinformation Science.</div>
            
            <div class="pl-3 font-mono underline">Download here</div>
          </div>

          
        </main>
        <!-- Sidebar (Right) -->
        <!-- NOTE: hidden in smaller screen sizes -->
        <aside class="sticky top-0 col-span-1 hidden h-screen bg-white p-4 xl:block"> </aside>
      </div>
    </div>
    

    <style>
  
    </style>