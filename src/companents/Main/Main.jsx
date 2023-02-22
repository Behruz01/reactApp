function Main() {
  return (
    <>
      <div class="container left">
        <main class="scene left">
          <div class="round-follower"></div>
          <div class="round-follower"></div>
          <div class="round-follower"></div>
          <div class="round-follower"></div>
        </main>
      </div>
      <div class="container right">
        <aside class="scene right">
          <div class="round-follower"></div>
          <div class="round-follower"></div>
          <div class="round-follower"></div>
          <div class="round-follower"></div>
        </aside>
      </div>

      <form>
        <div>
          <label for="mode">3D Mode</label>
          <select id="mode">
            <option value="0">None</option>
            <option value="1">Google Cardboard</option>
            <option value="2" selected>
              3D Glasses
            </option>
          </select>
        </div>
        <div>
          <label for="animate">Animation</label>
          <select id="animate">
            <option value="paused">Paused</option>
            <option value="running" selected>
              Running
            </option>
          </select>
        </div>
      </form>
    </>
  );
}

// const mode = document.getElementById("mode");
// mode.addEventListener("change", (e) => {
//   document.body.style.setProperty("--enable-3d", e.currentTarget.value);
// });

// const playState = document.getElementById("animate");
// playState.value = getComputedStyle(document.body)
//   .getPropertyValue("--animate")
//   .trim();
// playState.addEventListener("change", (e) => {
//   document.body.style.setProperty("--animate", e.currentTarget.value);
// });

export default Main;
