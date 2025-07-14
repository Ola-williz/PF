document.addEventListener('DOMContentLoaded', function() {
	// Mobile Menu Script
	const mobileMenuBtn = document.getElementById('mobile-menu-btn');
	const mobileMenu = document.getElementById('mobile-menu');
	const mobileMenuLinks = mobileMenu.querySelectorAll('a');
	mobileMenuBtn.addEventListener('click', function() {
		mobileMenu.classList.toggle('active');
	});
	mobileMenuLinks.forEach(link => {
		link.addEventListener('click', function() {
			mobileMenu.classList.remove('active');
		});
	});
	document.addEventListener('click', function(e) {
		if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
			mobileMenu.classList.remove('active');
		}
	});

	// Portfolio Tabs Script
	const tabs = document.querySelectorAll('.portfolio-tab');
	const contents = document.querySelectorAll('.portfolio-content');
	tabs.forEach(tab => {
		tab.addEventListener('click', function() {
			const targetTab = this.dataset.tab;
			tabs.forEach(t => {
				t.classList.remove('active', 'bg-primary', 'text-white');
				t.classList.add('bg-gray-200', 'text-gray-700');
			});
			this.classList.add('active', 'bg-primary', 'text-white');
			this.classList.remove('bg-gray-200', 'text-gray-700');
			contents.forEach(content => {
				content.classList.add('hidden');
			});
			document.getElementById(targetTab + '-portfolio').classList.remove('hidden');
		});
	});

	// Contact Form Script
	const contactForm = document.getElementById('contact-form');
	const successOverlay = document.getElementById('success-overlay');
	const closeSuccess = document.getElementById('close-success');
	if (contactForm) {
		contactForm.addEventListener('submit', function(e) {
			e.preventDefault();
			const formData = new FormData(this);
			const name = formData.get('name');
			const email = formData.get('email');
			const subject = formData.get('subject');
			const message = formData.get('message');
			if (name && email && subject && message) {
				successOverlay.classList.add('active');
				contactForm.reset();
			}
		});
	}
	if (closeSuccess) {
		closeSuccess.addEventListener('click', function() {
			successOverlay.classList.remove('active');
		});
	}
	if (successOverlay) {
		successOverlay.addEventListener('click', function(e) {
			if (e.target === successOverlay) {
				successOverlay.classList.remove('active');
			}
		});
	}

	// Back to Top Script
	const backToTopBtn = document.getElementById('back-to-top');
	if (backToTopBtn) {
		backToTopBtn.addEventListener('click', function() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		});
		window.addEventListener('scroll', function() {
			if (window.scrollY > 300) {
				backToTopBtn.style.opacity = '1';
			} else {
				backToTopBtn.style.opacity = '0.7';
			}
		});
	}
});