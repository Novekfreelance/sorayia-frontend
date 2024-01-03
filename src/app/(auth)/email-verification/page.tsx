import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import EmailVerificationForm from "@/components/EmailVerifForm";
const EmailVerification = () => {
	return (
		<main>
			<MaxWidthWrapper className="h-full-dvh flex justify-center items-center">
					<div className="w-[500px] text-center">
						<h1 className="text-4xl-700 text-primary text-center mb-3">Email Verification</h1>
						<h2 className="text-2xl-600 text-gray-600 mb-7">A verification code has been sent to your email</h2>
						<EmailVerificationForm />
					</div>
			</MaxWidthWrapper>
		</main>
	)
}

export default EmailVerification