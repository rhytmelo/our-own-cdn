/**
* Copyright (c) 2024, Rhytmelo Designs Agency. All rights reserved.
*
* This software is proprietary to Rhytmelo Designs Agency. No rights are granted to use, 
* download, copy, modify, distribute, or otherwise exploit this software in any form, 
* except as expressly authorized in writing by Rhytmelo Designs Agency.
*
* Unauthorized use of this software or any part thereof is strictly prohibited. Any 
* violations may result in legal action under applicable laws.
*
* THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
* PURPOSE, OR NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
* FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR 
* OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
* DEALINGS IN THE SOFTWARE.
*/
document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector("footer .container");

    footer.innerHTML = `
        <p class="text-sm">&copy; ${currentYear} Designed & Developed by RHYTMELO DESIGNS</p>
        <p class="text-sm mt-2">Empowering businesses with innovative solutions for a better tomorrow.</p>
    `;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    const disallowedKeys = ['u', 's', 'p', 'a', 'c'];
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && disallowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    });

    if (window.self !== window.top) {
        window.top.location = window.self.location;
    }
});

function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    drawer.classList.toggle('-translate-x-full');
}
