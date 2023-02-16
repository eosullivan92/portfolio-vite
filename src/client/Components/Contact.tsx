import React, { useState } from 'react'
import { send } from 'emailjs-com'

export default function Contact() {
	const [toSend, setToSend] = useState({
		from_name: '',
		from_email: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		send('service_0nbaoqr', 'template_kgf2xar', toSend, 'pMvrxUyT263cCAs7G')
			.then((response) => {
				console.log('SUCCESS!', response.status, response.text)
				setToSend({
					from_name: '',
					from_email: '',
					message: '',
				})
			})
			.catch((err) => {
				console.log('FAILED...', err)
			})
	}

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value })
	}

	return (
		<section className="contact">
			<h2 className="contact__title">Contact</h2>

			<div className="contact__container">
				<div className="contact__content">
					<p className="contact__cta">
						Looking for a Web Developer? Lets get in touch.
					</p>
					<ul className="contact__list">
						<li className="contact__list-item">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="icon-mail"
								height="24px"
								width="24px"
							>
								<path
									fill="#072ac8"
									d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"
								/>
								<path
									fill="#072ac8"
									d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"
								/>
							</svg>{' '}
							<span className="contact__list-item__text">
								eamonnsosullivan@gmail.com
							</span>
						</li>
						<li className="contact__list-item">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="icon-phone-ring"
								height="24px"
								width="24px"
							>
								<path
									fill="#072ac8"
									d="M4 2h4a1 1 0 0 1 .98.8l1 5a1 1 0 0 1-.27.9l-2.52 2.52a12.05 12.05 0 0 0 5.59 5.59l2.51-2.52a1 1 0 0 1 .9-.27l5 1c.47.1.81.5.81.98v4a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2z"
								/>
								<path
									fill="#072ac8"
									d="M22 10a1 1 0 0 1-2 0 6 6 0 0 0-6-6 1 1 0 0 1 0-2 8 8 0 0 1 8 8zm-4 0a1 1 0 0 1-2 0 2 2 0 0 0-2-2 1 1 0 0 1 0-2 4 4 0 0 1 4 4z"
								/>
							</svg>{' '}
							<span className="contact__list-item__text">
								+64 02040580875
							</span>
						</li>
						<li className="contact__list-item">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="icon-home"
								height="24px"
								width="24px"
							>
								<path
									fill="#072ac8"
									d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
								/>
								<path
									fill="#072ac8"
									d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"
								/>
							</svg>{' '}
							<span className="contact__list-item__text">
								Current location: Wellington, NZ
							</span>
						</li>
						<li className="contact__list-item">
							<svg
								fill="#072ac8"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="icon-office"
								height="24px"
								width="24px"
							>
								<path
									fill="#072ac8"
									d="M5 9h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm12 2v3h3v-3h-3zm0 5v3h3v-3h-3zm-5 0v3h3v-3h-3zm0-5v3h3v-3h-3z"
								/>
								<path d="M9 4h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9v-6H5v6H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1a2 2 0 1 1 4 0z" />
							</svg>
							<span className="contact__list-item__text">
								Open to work: Australia & NZ
							</span>
						</li>
					</ul>
				</div>
				<div className="contact__form-control">
					<form className="contact__form" onSubmit={handleSubmit}>
						<div className="contact__input-control">
							<input
								type="text"
								name="from_name"
								id="from_name"
								placeholder={' '}
								value={toSend.from_name}
								onChange={handleChange}
								className="contact__input"
								required
							/>
							<label
								className="contact__input-label"
								htmlFor="from_name"
							>
								Your Name
							</label>
						</div>
						<div className="contact__input-control">
							<input
								type="email"
								name="from_email"
								id="from_email"
								placeholder={' '}
								value={toSend.from_email}
								onChange={handleChange}
								className="contact__input"
								required
							/>
							<label
								className="contact__input-label"
								htmlFor="from_email"
							>
								Email
							</label>
						</div>
						<div className="contact__textarea-control">
							<textarea
								rows={10}
								cols={50}
								name="message"
								placeholder={' '}
								value={toSend.message}
								onChange={handleChange}
								className="contact__textarea"
								required
							/>
							<label
								className="contact__textarea-label"
								htmlFor="from_message"
							>
								Message
							</label>
						</div>
						<button className="contact__btn" type="submit">
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
