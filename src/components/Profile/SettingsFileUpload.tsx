import Image from "next/image"


const SettingsFileUpload = () => {
    return (
        <div className="w-full h-[96px] border-dashed border-[2px] rounded-[15px] border-[#29b080] p-[24px] color-white flex justify-between items-center">
            <Image src="/images/profile/temp/gallery.png" layout="fixed" width={48} height={48} />
            <div className="flex flex-col justify-between">
                <div className="font-500 text-[18px] text-[#f3f3f3]">
                    new_avatar.png
                </div>

                <div className="font-500 text-[14px] text-[#474749]">
                    JPG, JPEG2000, PNG
                </div>
            </div>

            <div className="flex rounded-[40px] bg-[#1f1f20] h-[40px] w-[40px] justify-center items-center cursor-pointer">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.32166 6.0001L11.8083 1.51327C11.9317 1.38976 11.9998 1.22498 12 1.04927C12 0.873464 11.9319 0.708488 11.8083 0.585171L11.4151 0.192098C11.2915 0.0682932 11.1267 0.000488281 10.9508 0.000488281C10.7752 0.000488281 10.6104 0.0682932 10.4868 0.192098L6.00019 4.67863L1.51337 0.192098C1.38995 0.0682932 1.22507 0.000488281 1.04927 0.000488281C0.873658 0.000488281 0.70878 0.0682932 0.585366 0.192098L0.192 0.585171C-0.064 0.841171 -0.064 1.25756 0.192 1.51327L4.67873 6.0001L0.192 10.4867C0.0684878 10.6104 0.000487805 10.7752 0.000487805 10.9509C0.000487805 11.1266 0.0684878 11.2914 0.192 11.415L0.585268 11.8081C0.708683 11.9318 0.873658 11.9997 1.04917 11.9997C1.22498 11.9997 1.38985 11.9318 1.51327 11.8081L6.0001 7.32146L10.4867 11.8081C10.6103 11.9318 10.7751 11.9997 10.9507 11.9997H10.9509C11.1266 11.9997 11.2914 11.9318 11.415 11.8081L11.8082 11.415C11.9316 11.2915 11.9997 11.1266 11.9997 10.9509C11.9997 10.7752 11.9316 10.6104 11.8082 10.4868L7.32166 6.0001Z" fill="#474749" />
                </svg>
            </div>
        </div>
    )
}

export default SettingsFileUpload