import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `

<header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-8 dark:bg-gray-800">
        <div
          class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
        >
          <a href="/" class="flex items-center">
            <h2
              class="self-center font-semibold whitespace-nowrap dark:text-white"
            >
              Blog
            </h2>
          </a>

          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
            >
              <li>
                <a
                  href="/about"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >About</a
                >
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
})
export default class HeaderComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
