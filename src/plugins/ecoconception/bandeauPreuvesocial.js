export function bandeauPreuvesocial (editor, options = {}) {
    editor.Blocks.add('bandeauPreuvesocial', {
        label : 'Bandeau preuve social',
        content : `
        <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
          <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"  alt="Transistor" width="158" height="48">
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" alt="Reform" width="158" height="48">
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"  alt="Tuple" width="158" height="48">
            <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"  alt="SavvyCal" width="158" height="48">
            <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" alt="Statamic" width="158" height="48">
          </div>
        </div>
      </div>`,
    })
};

export function picto (editor, options = {}) {
    editor.Blocks.add('picto', {
        label : 'Picto',
        content : `<div class="row">
        <div class="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up">

          <!-- Icon -->
          <div class="icon text-primary mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA"></path><path d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA" opacity=".3"></path></g></svg>            </div>

          <!-- Heading -->
          <h3>
            Built for developers
          </h3>

          <!-- Text -->
          <p class="text-muted mb-6 mb-md-0">
            Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.
          </p>

        </div>
        <div class="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">

          <!-- Icon -->
          <div class="icon text-primary mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z" fill="#335EEA"></path><path d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z" fill="#335EEA" opacity=".3"></path></g></svg>            </div>

          <!-- Heading -->
          <h3>
            Designed to be modern
          </h3>

          <!-- Text -->
          <p class="text-muted mb-6 mb-md-0">
            Designed with the latest design trends in mind. Landkit feels modern, minimal, and beautiful.
          </p>

        </div>
        <div class="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          <!-- Icon -->
          <div class="icon text-primary mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>            </div>

          <!-- Heading -->
          <h3>
            Documentation for everything
          </h3>

          <!-- Text -->
          <p class="text-muted mb-0">
            We've written extensive documentation for components and tools, so you never have to reverse engineer anything.
          </p>

        </div>
      </div>`,
    });
};