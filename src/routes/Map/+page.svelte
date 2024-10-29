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
    </div>
    