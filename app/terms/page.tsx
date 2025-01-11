import { Card, CardContent } from '@/components/ui/card'

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Terms and Conditions</h1>

      <Card className="mb-8">
        <CardContent className="prose max-w-none p-6">
          <ol className="list-decimal space-y-4">
            <li>
              This youth matrimonial meet is being organized by International Vaishya Mahasammelan Uttarakhand, Mahanagar, Dehradun.
            </li>

            <li>
              International Vaishya Mahasammelan Uttarakhand's responsibility is limited to only introducing the candidates.
              All marriage-related matters must be decided among yourselves. International Vaishya Mahasammelan Uttarakhand,
              Dehradun will not mediate in any form.
            </li>

            <li>
              Please inform International Vaishya Mahasammelan Uttarakhand in writing or by phone after the relationship is finalized.
            </li>

            <li>
              Both parties should verify all information and details about the boy/girl themselves before proceeding.
              International Vaishya Mahasammelan Uttarakhand Mahanagar Dehradun will not be responsible in this regard.
            </li>

            <li>
              For matrimonial introduction, the minimum age requirement is 21 years for boys and 18 years for girls.
            </li>

            <li>
              You can get financial support from International Vaishya Mahasammelan Uttarakhand for the marriage of poor girls.
            </li>

            <li>
              Registration fees will not be refunded under any circumstances.
            </li>

            <li>
              International Vaishya Mahasammelan Uttarakhand will not be responsible for any kind of dispute.
            </li>

            <li>
              Please send the registration form along with registration fee of Rs. 200/- by check or draft to
              International Vaishya Mahasammelan Uttarakhand's province office at 18-Alkhat Bazar, Dehradun Uttarakhand.
            </li>

            <li>
              Please register as soon as possible for the matrimonial meet being held on February 23, 2025.
              A souvenir will also be published in this.
            </li>
          </ol>

          <div className="mt-8 p-4 bg-amber-50 rounded-lg">
            <p className="font-semibold text-red-600">Important Note:</p>
            <p>Last date for form submission: February 05, 2025 (Wednesday)</p>
          </div>

          <div className="mt-8">
            <p className="font-semibold">Bank Details:</p>
            <ul className="mt-2">
              <li>Bank: Punjab National Bank</li>
              <li>Account Number: 4211001001731114</li>
              <li>IFSC Code: PUNB0421100</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}