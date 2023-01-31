import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-presentation",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gray-900 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">
            Your Modern Angular App is Ready!
          </h2>

          <p class="mt-4 text-gray-300">
            You can start developpment now. This starter contains Tailwindcss,
            prettier, and EsLint preconfigured!
          </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="https://angular.io">
            <img
              class="h-10 w-10"
              src="/assets/angular.svg"
              alt="angular logo" />

            <h2 class="mt-4 text-xl font-bold text-white">Angular 15!</h2>

            <p class="mt-1 text-sm text-gray-300">
              Create-Angular-Modern-App is a tiny starter for the BEST Front-end
              Framework! Cli generate by default Standalone Single File
              Components without testing file, but you can change that in the
              Angular.json file!
              <br />Read Angular Docs there.
            </p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="https://tailwindcss.com">
            <img
              class="h-10 w-10"
              src="/assets/tailwindcss.svg"
              alt="tailwind logo" />

            <h2 class="mt-4 text-xl font-bold text-white">TailwindCss</h2>

            <p class="mt-1 text-sm text-gray-300">
              TailwindCss is the less horrible way to do css in web apps, No
              Debate. That's why it is included in this Angular starter. Read
              the docs, you'll see, it's okay!
            </p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="https://eslint.org">
            <img class="h-10 w-10" src="/assets/eslint.svg" alt="eslint logo" />

            <h2 class="mt-4 text-xl font-bold text-white">Eslint</h2>

            <p class="mt-1 text-sm text-gray-300">
              Eslint + Angular-Eslint is the perfect combo to produce a clean
              codebase. With that, you won't anymore commit shitty code and make
              laugh your tech-lead.
            </p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="https://prettier.io">
            <img
              class="h-10 w-10"
              src="/assets/prettier.svg"
              alt="eslint logo" />

            <h2 class="mt-4 text-xl font-bold text-white">Prettier</h2>

            <p class="mt-1 text-sm text-gray-300">
              Prettier is the code formatter that will permit to read commits,
              and find the bug Michel introduced in a 3000 lines file.
              <br /><br />Note: It doesn't allow you to write 3000 lines in a
              single file.
            </p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="https://github.com/clemparpa/Angular-Modern-App">
            <img class="h-10 w-10" src="/assets/github.svg" alt="github logo" />

            <h2 class="mt-4 text-xl font-bold text-white">Support Us</h2>

            <p class="mt-1 text-sm text-gray-300">
              If you aren't a tailwind delusional hater and if this project
              helps you, feel free to give it a star on github!
            </p>
          </a>
        </div>

        <div class="mt-12 text-center">
          <a
            href="https://github.com/clemparpa/Angular-Modern-App"
            class="mt-8 inline-flex items-center rounded border border-pink-600 bg-pink-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500">
            <span class="text-sm font-medium"> Our Github Repo </span>

            <svg
              class="ml-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationComponent {}
