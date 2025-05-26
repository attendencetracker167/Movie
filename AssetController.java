package com.infy.controller;

import java.util.List;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infy.dto.AssetDTO;
import com.infy.entity.Asset;
import com.infy.repository.AssetRepository;
import com.infy.service.AssetService;

@RestController
@RequestMapping("/api/assets")
@CrossOrigin("*")
public class AssetController {

	@Autowired
	private AssetService assetService;
	
	@Autowired
	private AssetRepository assetrepo;
	
	@GetMapping
	public List<Asset> getAllAssets(){
		return assetService.getAllAssets();
	}
	@GetMapping("/{id}")
	public Asset getAssetById(@PathVariable Long id) {
		return assetService.getAssetById(id);
	}
	@PostMapping
	public Asset addAsset(@RequestBody Asset asset) {
		return assetService.addAsset(asset);
	}
	@PutMapping("/{id}")
	public Asset updateAsset(@PathVariable Long id,@RequestBody Asset asset) {
		return assetService.updateAsset(id, asset);
	}
	@PutMapping("/{id}/toggle-status")
	public ResponseEntity<Asset> toggleAssetStatus(@PathVariable Long id){
		Optional<Asset> optionalAsset=assetrepo.findById(id);
		if(optionalAsset.isPresent()) {
			Asset asset=optionalAsset.get();
			String currentStatus=asset.getStatus();
			asset.setStatus(currentStatus.equalsIgnoreCase("Checked In")?"Checked Out":"Checked In");
			assetrepo.save(asset);
			return ResponseEntity.ok(asset);
		}else {
			return ResponseEntity.notFound().build();
		}
	}
	@DeleteMapping("/{id}")
	public void deleteAsset(@PathVariable Long id) {
		assetService.deleteAsset(id);
	}
}
