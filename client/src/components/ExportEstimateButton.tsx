import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { generateEstimatePdf, formatDate, generateEstimateNumber } from '@/lib/pdfUtils';
import { useEstimateContext } from '@/providers/EstimateProvider';
import { useCurrencyContext } from '@/providers/CurrencyProvider';
import { toast } from '@/lib/use-toast';

interface ExportEstimateButtonProps {
  className?: string;
}

export function ExportEstimateButton({ className }: ExportEstimateButtonProps) {
  const { items, subtotal, tax, total } = useEstimateContext();
  const { currency } = useCurrencyContext();

  const handleExport = async () => {
    try {
      // Prepare estimate data with proper typing
      const estimateData = {
        items: items.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description || '',
          quantity: item.quantity,
          unitPrice: item.price,
          total: item.price * item.quantity,
        })),
        subtotal,
        tax,
        total,
        currency: currency.code, // Use the currency code for the PDF
        date: formatDate(),
        estimateNumber: generateEstimateNumber(),
      };

      // Get the estimate summary element to capture
      const element = document.getElementById('estimate-summary');
      
      // Generate and download the PDF
      const success = await generateEstimatePdf(
        element || document.body,
        estimateData,
        `IT-Services-Estimate-${new Date().toISOString().split('T')[0]}`
      );

      if (success) {
        toast({
          title: 'Estimate exported successfully',
          description: 'Your estimate has been downloaded as a PDF.',
          variant: 'default',
        });
      } else {
        throw new Error('Failed to generate PDF');
      }
    } catch (error) {
      console.error('Error exporting estimate:', error);
      toast({
        title: 'Export failed',
        description: 'There was an error exporting your estimate. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Button
      onClick={handleExport}
      className={`gap-2 ${className}`}
      variant="outline"
    >
      <Download className="h-4 w-4" />
      Export as PDF
    </Button>
  );
}
