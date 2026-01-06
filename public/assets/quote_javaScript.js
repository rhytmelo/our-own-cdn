// Web3Forms Configuration
        document.getElementById('acceptanceForm').addEventListener('submit', function (e) {
            const btn = e.target.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.textContent = '⏳ Sending...';
        });

        //Form Validation and Submission Handling
        document.addEventListener("DOMContentLoaded", function () {

            const form = document.querySelector('form[action="https://api.web3forms.com/submit"]');
            const errorBox = document.querySelector('.error-message');
            const successBox = document.querySelector('.success-message');

            form.addEventListener("submit", function (e) {

                errorBox.style.display = "none";
                successBox.style.display = "none";

                const name = form.elements["clientName"]?.value.trim();
                const email = form.elements["email"]?.value.trim();
                const phone = form.elements["clientPhone"]?.value.trim();
                const company = form.elements["companName"]?.value.trim();

                const agreeScope = form.elements["agree_scope"]?.checked;
                const agreeAccept = form.elements["agree_accept"]?.checked;

                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const phonePattern = /^[0-9]{10,15}$/;

                if (
                    !name || name.length < 3 ||
                    !emailPattern.test(email) ||
                    !phonePattern.test(phone) ||
                    !company || company.length < 2 ||
                    !agreeScope ||
                    !agreeAccept
                ) {
                    e.preventDefault();
                    errorBox.style.display = "block";
                    return false;
                }

                // Allow submit + show success
                successBox.style.display = "block";
            });
        });

        // Enhanced Form Submission with Fetch API
        document.addEventListener("DOMContentLoaded", () => {

            const form = document.querySelector('form[action="https://api.web3forms.com/submit"]');
            const errorBox = document.querySelector('.error-message');
            const successBox = document.querySelector('.success-message');

            function showToast(message) {
                const toast = document.createElement("div");
                toast.textContent = message;

                toast.style.position = "fixed";
                toast.style.bottom = "24px";
                toast.style.right = "24px";
                toast.style.background = "#dc2626";
                toast.style.color = "#fff";
                toast.style.padding = "14px 18px";
                toast.style.borderRadius = "8px";
                toast.style.fontSize = "14px";
                toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
                toast.style.zIndex = "9999";

                document.body.appendChild(toast);

                setTimeout(() => toast.remove(), 4000);
            }

            form.addEventListener("submit", async (e) => {
                e.preventDefault();

                errorBox.style.display = "none";
                successBox.style.display = "none";

                const name = form.elements["clientName"]?.value.trim();
                const email = form.elements["email"]?.value.trim();
                const phone = form.elements["clientPhone"]?.value.trim();
                const company = form.elements["companName"]?.value.trim();

                const agreeScope = form.elements["agree_scope"]?.checked;
                const agreeAccept = form.elements["agree_accept"]?.checked;

                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const phonePattern = /^[0-9]{10,15}$/;

                if (
                    !name || name.length < 3 ||
                    !emailPattern.test(email) ||
                    !phonePattern.test(phone) ||
                    !company || company.length < 2 ||
                    !agreeScope || !agreeAccept
                ) {
                    errorBox.style.display = "block";
                    return;
                }

                try {
                    const formData = new FormData(form);

                    const response = await fetch(form.action, {
                        method: "POST",
                        body: formData
                    });

                    const result = await response.json();

                    if (result.success) {
                        // Optional: show success briefly
                        successBox.style.display = "block";

                        // Redirect after short delay
                        setTimeout(() => {
                            window.location.href = "https://rhytmelo.com/about";
                        }, 800);
                    } else {
                        showToast("Submission failed. Please try again.");
                    }

                } catch (error) {
                    showToast("Submission failed. Please try again.");
                }
            });
        });

        function printDocument() {

            // Force visibility of everything
            const hiddenElements = [];

            document.querySelectorAll('[style*="display: none"]').forEach(el => {
                hiddenElements.push({ el, display: el.style.display });
                el.style.display = "block";
            });

            // Add print class to body
            document.body.classList.add("print-mode");

            // Wait for layout to stabilize
            setTimeout(() => {
                window.print();

                // Restore UI after print
                setTimeout(() => {
                    document.body.classList.remove("print-mode");

                    hiddenElements.forEach(item => {
                        item.el.style.display = item.display;
                    });
                }, 500);

            }, 300);
        }

        document.addEventListener("DOMContentLoaded", () => {

            const issuedEl = document.querySelector(".date-issued");
            const form = document.querySelector("form");
            const expiredBox = document.querySelector(".quote-expired");

            if (!issuedEl || !form || !expiredBox) return;

            // Extract date text: "📅 Issued: 6th January 2026"
            const issuedText = issuedEl.textContent.replace("📅 Issued:", "").trim();

            // Convert "6th January 2026" → Date
            const cleanedDate = issuedText.replace(/(\d+)(st|nd|rd|th)/, "$1");
            const issuedDate = new Date(cleanedDate);

            // Expiry = Issued + 3 days
            const expiryDate = new Date(issuedDate);
            expiryDate.setDate(expiryDate.getDate() + 3);

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (today > expiryDate) {
                form.style.display = "none";
                expiredBox.style.display = "block";
            }
        });